import React, { useState } from 'react'

export default function ToDo() {

  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);
  const [updateItem,setUpdateItem] = useState(false);

  const updateInput = (value) => {
    setUserInput(value);
    // console.log(value);
  };

  const addItem = () => {
    if (userInput.trim() !== '') {
      const newItem = {
        id: Math.random(),
        value: userInput
      };
      console.log(newItem);
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (id) => {
    const updatedList = list.filter((item)=> item.id !== id);
    setList(updatedList);
  };

  const editItem = (editItem) => {
    console.log(editItem.id);
    const userInput = list.filter((item)=>item.id == editItem.id);
    console.log(editItem.value);
    setUserInput(editItem.value);
    setUpdateItem(true);
  };
  const addEditedItem = ()=> {
    setUpdateItem(false);

  };

  return (
    <div className='container '>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >ToDo List</h1>
      <div className="row">
        <div className='input-group'>
          <input
            type="text"
            className="form-control"
            placeholder="add item . . ."
            value={userInput}
            onChange={(event) => updateInput(event.target.value)}
          />
          {updateItem?
          <button
          className='btn btn-primary mx-1'
          onClick={() => addEditedItem()}
         >Update</button>
         :
        <button
          className='btn btn-primary mx-1'
          onClick={() => addItem()}
        >Add</button>}
        </div>
      </div>
      <div className="row">
        <div className='col-md-5 my-2 '>
          <ul className="list-group ">
            {list.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.value}
                <div>
                  <button
                    className='btn btn-warning m-2'
                    onClick={()=>editItem(item)}
                    >Edit
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={()=>deleteItem(item.id)}
                  >Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
