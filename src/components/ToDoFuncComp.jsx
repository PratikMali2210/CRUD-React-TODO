import React, { useState } from "react";

const ToDoFuncComp = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput.trim() !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput
      };
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedTodo;
      setList(updatedList);
    }
  };

  return (
    <div className="container">
      <h1>TODO LIST Function Component</h1>
      <hr />
      <div className="row">
        <div className="col-md-5 offset-md-4">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="add item . . ."
              value={userInput}
              onChange={(event) => updateInput(event.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-dark mt-2"
                onClick={() => addItem()}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 offset-md-4">
          <ul className="list-group">
            {list.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                {item.value}
                <div>
                  <button
                    className="btn btn-light mr-2"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-light"
                    onClick={() => editItem(index)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoFuncComp;
