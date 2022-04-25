import { Task } from '../model';
import { useState } from 'react'

interface Props {
  task: string;
  id: string;
  handleDeleteTask: (id: string) => void;
  handleEditTask: (id: string,
    editField: string,
    e: React.FormEvent,
    editing: boolean) => void;
}

const TaskItem: React.FC<Props> = ({ task, handleDeleteTask, id, handleEditTask }) => {

  const [editing, setEditing] = useState<boolean>(false)
  const [editField, setEditField] = useState<string>(task)

  return (
    <div>
      {editing
        ? <form onSubmit={(e) => {
          handleEditTask(id, editField, e, editing)
          setEditing(!editing)
        }}>
          <input
            value={editField}
            onChange={(e) => setEditField(e.target.value)}
          />
        </form>
        : task}
      <button onClick={(e) => {
        handleEditTask(id, editField, e, editing)
        setEditing(!editing)
      }}>
        edit
      </button>
      <button onClick={() => handleDeleteTask(id)}>delete</button>

    </div>
  )
}

export default TaskItem