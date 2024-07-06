import { useState } from "react";
import "../src/projects/Todo/Todo.css";
import { MdDeleteForever } from "react-icons/md";

export const Keys = () => {
  const [task, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // return if todoInputValue is empty
    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    // setTasks can take either a new state value or a function. When it takes a function, React passes the current state (the previous state) as an argument to this function.
    setTasks((prevTasks) => [...prevTasks, inputValue]);
    setInputValue("");
  };

  console.log(task);

  //todo  Add Date features also
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List </h1>
      </header>
      <section id="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      </section>
      <section className="myUnOderList">
        <ul className="todo-list">
          {task.map((curTask, index) => {
            return <TodoLists key={index} data={curTask} />;
          })}
        </ul>
      </section>
    </section>
  );
};

const TodoLists = ({ data }) => {
  return (
    <li className="todo-item">
      <span> {data} </span>
      <input type="text" />
      {/* <button>
        <MdCheck className="check-btn" />
      </button> */}
      <button>
        <MdDeleteForever className="delete-btn" />
      </button>
    </li>
  );
};
