import React, { useEffect, useRef, useState } from "react";
// import categoriesFromFile from "../../data/categories.json";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import config from "../../data/config.json";

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  const addCategory = ($event) => {
    // console.log($event);
    if ($event.code === "Enter" || $event.type === "click") { // 1. kui tegemist on hiireklikiga siia funktsiooni sisenemisega
            // 2. kui tegemit on enter klahvivajutusega siia funktsiooni sisenemisega
      categories.push({"name": categoryRef.current.value}); 
      // JA LISAKS ---> muutma AddProductis ja EditProductis ka, et mul on objekti kuju
      fetch(config.categoriesDbUrl, {"method": "PUT", "body": JSON.stringify(categories)})
        .then(res => res.json())
        .then(() => {
          setCategories(categories.slice());
          categoryRef.current.value = "";
          toast.success(t("successfully-added"));
        })
    }
  };

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    // setCategories(categories.slice());
    fetch(config.categoriesDbUrl, {"method": "PUT", "body": JSON.stringify(categories)})
        .then(res => res.json())
        .then(() => {
          setCategories(categories.slice());
          // categoryRef.current.value = "";
          toast.success(t("successfully-deleted"));
        })
  };

  return (
    <div>
      <ToastContainer />
      {categories.map((element, index) => (
        <div key={index}>
          {element.name}
          <button onClick={() => deleteCategory(index)}>Delete</button>
        </div>
      ))}
      <br />
      <label>Category</label> <br />
      <input onKeyUp={addCategory} ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Add</button>
    </div>
  );
}

export default MaintainCategories;
