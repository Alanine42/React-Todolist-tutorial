import Header from "./components/Header";
import { useState } from 'react'
import Tasks from "./components/Tasks";
import AddTask
  from "./components/AddTask";
function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'HackerRank Assignment',
      day: 'Jun 27',
      reminder: true,
    },
    {
      id: 2,
      text: 'Redeem my Home',
      day: 'Jun 28',
      reminder: true,
    },
    {
      id: 3,
      text: 'CodePath Warmup',
      day: 'Jun 27',
      reminder: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = tasks.length + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // // Toggle Reminder
  // const toggleReminder = (id) => {
  //   console.log('toggle', id)
  //   setTasks(tasks.map((task) => task.id === id ?
  //     { ...task, reminder: !task.reminder } :
  //     task))
  // }

  const toggleReminder = (id) => {
    console.log("toggle ", id)
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
  }


  return (
    <div className="container">
      <Header
        title="Task Manager"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask ? <AddTask onAdd={addTask} /> : null}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ('No Tasks to Show')}
    </div>
  );
}

export default App;
