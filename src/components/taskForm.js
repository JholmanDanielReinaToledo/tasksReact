import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import {v4 as uuid} from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { selectTaskById } from "../features/tasks/selectors";

function TaskForm () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [id, setId] = useState();
  console.log(id);
  const task = useSelector(selectTaskById(id))
  console.log(task);

  useEffect(() => {
    if (params.id) {
      setId(params.id);
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    // dispatch(addTask({
    //   ...task,
    //   id: uuid(),
    // }));
    // navigate('/');
  }

  const handleChange = e => {
    /* setTask({
      ...task,
      [e.target.name]: e.target.value,
    }) */
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="title" type="text" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input type="submit" value="Save" />
    </form>
  )
}

export default TaskForm;