import {useState} from 'react';
import './index.css';

 function App (){
  const [tasks, setTasks] =  useState([
    {id: 5271, name: "Record First Song", completed: true},
    {id:3457, name: "Record Second Song", completed: false},
    {id:3458, name: "Record Third Song", completed: false}
  ]);
     
  function deleteHandler(id) {
    setTasks(tasks.filter(task => id !== task.id));

   }
   return (
    
    <div className="App">
      <div className = "box">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) =>(
          <li key={task.id}>
            <span>{task.id} - {task.name}</span>
            <button onClick={() => deleteHandler(task.id)} className = "delete">Delete</button>
            </li>
        ))}
      </ul>
      </div>
    </div>

  );
}


export default App;



