// App.jsx
import React from 'react';
import { useState } from 'react';
// import ParentComponent from '../src/ParentComponent ';

const App = () => {
const [formdata,setfromData] = useState({
  name:"",
  surname:"",
})

const handleChange = (e) =>{
      const{name,value} = e.target
      setfromData((prevData)=>({
          ...prevData,[name]:value
      }))
}
const handleDelete = () =>{
  setfromData({
    name:"",
    surname:"",
  })
}
  return (
    <div>
      {/* Render the ParentComponent */}
      {/* <ParentComponent /> */}
      <label>
        name:
        <input 
        type='text'
        name='name'
        value={formdata.name}
        onChange={handleChange}></input>
      </label><br></br>

      <label>
        surname:
        <input 
        type='text'
        name='surname'
        value={formdata.surname}
        onChange={handleChange}></input>
      </label><br></br>
      
       <button type='button'>button</button>
       <button type='button' onClick={handleDelete}>delete</button>
    </div>
  );
};

export default App;