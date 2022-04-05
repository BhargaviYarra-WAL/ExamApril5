import { useState, useEffect } from "react";
import axios from "axios";
const SqTodos = () => {
  let [todos, setTodos] = useState([
    { status: "", title: "", description: "" },
  ]);
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    axios
      .get("/sqtodos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addTodo = (event) => {
    event.preventDefault();
    let status = event.target.status.value;
    let title = event.target.title.value;
    let description = event.target.description.value;
    axios
      .get(`/sqtodos/create/${status}/${title}/${description}`)
      .then((res) => {
        console.log("created file", res);
        getTodos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  {
    /*let addTodo = (event) => {
    event.preventDefault();
    let todoObject = {
      title: event.target.title.value,
      status: event.target.status.value,
      description: event.target.description.value,
    };
    axios
      .get("/sqtodos/create", todoObject)
      .then((res) => {
        getTodos(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };*/
  }

  return (
    <div>
      <h1>TODO APLLICATION</h1>
      <form onSubmit={addTodo}>
        <b>Enter Todo</b>
        <br />
        <input type='text' name='title' />
        <br />
        <b>Enter status either 1 or 0</b>
        <br />
        <select name='status'>
          <option value='1'>1</option>
          <option value='0'>0</option>
        </select>

        <br />
        <b>Enter description</b>
        <br />
        <input type='text' name='description' />
        <br />

        <button className='btn1'>add</button>
      </form>
      {todos.map((val, index) => {
        return (
          <div className='showp'>
            status:{val.status ? "complete" : "incomplete"}
            <br />
            todo:{val.title}
            <br />
            description:{val.description}
            <br />
            createdAt:{val.createdAt}
            <br />
            updatedAt:{val.updatedAt}
          </div>
        );
      })}
    </div>
  );
};
export default SqTodos;
