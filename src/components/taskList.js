import { map, size } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList () {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks)
  
  const handleDelete = (task) => {
    console.log(task)
    dispatch(deleteTask(task));
  }

  return (
    <div>
      <h1>Tasks: {size(tasks) || 0}</h1>
      <Link to="/create-task">Create task</Link>
    
      {
        map(tasks, (task) => {
          return (
            <div key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => handleDelete(task)}>Delete</button>
              <Link to={`/edit-task/${task.id}`}>Edit</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskList;