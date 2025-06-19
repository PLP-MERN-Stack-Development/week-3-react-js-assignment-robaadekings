import {useState} from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

 function App(){
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title}])
  };

  const deleteTask = (id) =>{
    setTasks(tasks.filter(tasks => tasks.id !== id))
  };

  return(
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskForm addTask={addTask} />

      <TaskList tasks={tasks} deleteTask={deleteTask} />

    </div>
  );

} 
 
export default App;