import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();
  const [idError, setIdError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [avatarError, setAvatarError] = useState("");

  // TODO: Load data from backend service
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(json => setEmployees(json.data))
  }, []);

  const addEmployee = () => {
    if (!idRef.current.value) {
      setIdError("ID is required.");
      return;
    }
    if (!firstNameRef.current.value) {
      setNameError("First Name is required.");
      return;
    }
    if (!lastNameRef.current.value) {
      setNameError("Last Name is required.");
      return;
    }
    if (!emailRef.current.value) {
      setEmailError("Email is required.");
      return;
    }
    if (!avatarRef.current.value) {
      setAvatarError("Avatar is required.");
      return;
    }

    if (!/^\d+$/.test(idRef.current.value)) {
      setIdError("Invalid ID: Please enter a number.");
      return;
    }
    if (!/^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(firstNameRef.current.value)) {
      setNameError("Invalid name: Please enter only letters.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)) {
      setEmailError("Invalid email: Please enter a valid email address.");
      return;
    }

    const newEmployee = {
      id: Number(idRef.current.value),
      // first_name: nameRef.current.value.split(" ")[0],
      // last_name: nameRef.current.value.split(" ")[1],
      // name: nameRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      avatar: avatarRef.current.value,
    }
    employees.push(newEmployee);
    setEmployees(employees.slice());
  }

  const deleteEmployee = (index) => {
    // TODO: Delete an employee from the table
    employees.splice(index,1);
    setEmployees(employees.slice());
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          {/* <!-- TODO: Add a column for an avatar --> */}
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
       {employees.map((element, index) => <tr>
          <td>{element.id}</td>
          <td>{element.first_name} {element.last_name}</td>
          <td>{element.email}</td>
          <td><img src={element.avatar} alt="" /></td>
          <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
        </tr>)}

        <tr className="input-row">
          <td><input type="number" ref={idRef} placeholder="ID" className="form-control"/></td>
          <td><input type="text" ref={firstNameRef} placeholder="First Name" className="form-control"/>
          <input type="text" ref={lastNameRef} placeholder="Last Name" className="form-control"/>
          {nameError && <div className="invalid-feedback">{nameError}</div>}</td>
          <td><input type="text" ref={emailRef} placeholder="Email" className="form-control"/></td>
          <td><input type="text" ref={avatarRef} placeholder="Avatar" className="form-control"/></td>
          <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
        </tr>
        </tbody>
        {/* {nameError} */}
      </Table>
    </div>

  </div>)
}

export default Employees;