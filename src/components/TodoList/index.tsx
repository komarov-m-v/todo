import { useId } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./TodoList.css";

import TodoItem from "../TodoItem";

const TodoList = () => {
  const tasks = useSelector((state: RootState) => state.todos.tasks);
  const itemId = useId();

  return (
    <ul className="todo-list">
      {tasks.map((task, i) => (
        <li className="todo-list__item" key={itemId + i}>
          <TodoItem task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
