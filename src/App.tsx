import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./store/todo.slice";

import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [taskText, setTaskText] = useState<string>("");
  const dispatch = useDispatch();

  const onClickAdd = () => {
    if (taskText.trim() !== "") {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };
  return (
    <div className="todo">
      <div className="todo__head">
        <h1 className="todo__title">To-Do List</h1>
        <label className="todo__field">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter new task"
          />
        </label>
        <button className="todo__btn" onClick={onClickAdd}>
          Add Task
        </button>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
