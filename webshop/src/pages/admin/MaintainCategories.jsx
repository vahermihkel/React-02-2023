import React, { useRef, useState } from "react";
import categoriesFromFile from "../../data/categories.json";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function MaintainCategories() {
  const [categories, setCategories] = useState(categoriesFromFile);
  const categoryRef = useRef();
  const { t } = useTranslation();

  const addCategory = ($event) => {
    // console.log($event);
    if ($event.code === "Enter" || $event.type === "click") { // 1. kui tegemist on hiireklikiga siia funktsiooni sisenemisega
            // 2. kui tegemit on enter klahvivajutusega siia funktsiooni sisenemisega
      categoriesFromFile.push(categoryRef.current.value);
      setCategories(categoriesFromFile.slice());
      categoryRef.current.value = "";
      toast.success(t("successfully-added"));
    }
  };

  const deleteCategory = (index) => {
    categoriesFromFile.splice(index, 1);
    setCategories(categoriesFromFile.slice());
  };

  return (
    <div>
      <ToastContainer />
      {categories.map((element, index) => (
        <div key={index}>
          {element}
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
