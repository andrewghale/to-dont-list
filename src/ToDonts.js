import React, { useState } from 'react';
import uuid4 from "uuid4";
import "./styles/main.scss";

function ToDonts() {
  const [todonts, setTodonts] = useState([
    {
      id: uuid4(),
      todonts: 'One'
    },
    {
      id: uuid4(),
      todonts: 'Two'
    },
    {
      id: uuid4(),
      todonts: 'Three'
    }
  ])

  const [todontInput, settodontInput] = useState('');


  function handleSubmit(e) {
    // Stop form from submitting
    e.preventDefault();
    setTodonts([
      ...todonts, {
        id: uuid4(),
        todonts: todontInput
      }
    ])
    settodontInput('');
  }

  function handleChange(e) {
    settodontInput(e.target.value);
    console.log(e.target.value);
  }

  function handleRemove(id) {
    // console.log(id);
    setTodonts(todonts.filter((todonts) => todonts.id !== id));
  }

  return (
    <div className="todontlist">
      <h1>To-Don't List</h1>
      { todonts.map(({ id, todonts }) => (
        <p onClick={() => handleRemove(id)} key={id}>{todonts}</p>
      )) }
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Add To-Don't:
            <input type="text" onChange={handleChange} value={todontInput} />
          </label>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}

export default ToDonts;
