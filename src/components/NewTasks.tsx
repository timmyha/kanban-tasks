import { Task } from '../model'
import TaskItem from './TaskItem'

interface Props {
  tasks: Task[];
  handleDeleteTask: (id: string) => void;
  handleEditTask: (id: string, 
                    editField: string, 
                    e: React.FormEvent,
                    editing: boolean) => void;
}

const NewTasks: React.FC<Props>  = ( {tasks, handleDeleteTask, handleEditTask } ) => {

  let newTaskDisplay = tasks.map(task => (
              <TaskItem 
                key={task.id}
                id={task.id}
                task={task.content}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
              />
        ))
  
  return (
    <div>
      {newTaskDisplay}
    </div>
  )
}

export default NewTasks