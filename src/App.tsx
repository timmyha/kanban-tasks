import React, { useState } from 'react'
import InputField from './components/InputField'
import { Task } from './model'
import NewTasks from './components/NewTasks'
import { nanoid } from 'nanoid'

const App: React.FC = () => {

  const [input, setInput] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    tasks &&
      setTasks([
        ...tasks,
        {
          id: nanoid(),
          content: input,
          isComplete: "requested"
        }
      ])
    setInput('')
  }

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => id !== task.id))
  }

  const handleEditTask = (id: string, editField: string, e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setTasks(tasks.map(task => {
      return id === task.id 
      ? {
        ...task, 
        content: editField
        } 
      : task
    }))
  }

  return (
    <div className="App">
      <h1>taskZZZ</h1>

      <InputField
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />

      <NewTasks
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
      />


    </div>
  )
}

export default App