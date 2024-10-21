import { useState } from 'react';
import './App.css';
import Search from './Search';

function App() {

 let [Task,setTask] = useState([
    "Task1",
    "Task2"
  ])

  // In order to pass the props from child component to parent component , 
  // First we should create function and pass parameters and Call Child functional component in parent component.
  // And pass methode using props, Update the state varible of parent component by calling the function in child component and pass the argument.

  let addNew = (newTask)=>{
    setTask([...Task,newTask])
   }


  return (
    <>
      <Search add={addNew}></Search>
      <ul>
        {
          Task.map((t)=>{
            return(
              <li>{t}</li>
            )
          })
          
        }
      </ul>
    </>
  );
}

export default App;

