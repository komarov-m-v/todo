import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, editTask } from "../../store/todo.slice";
import type { TodoModel } from "../../store/todo.slice";

import "./TodoItem.css";

type Props = {
  task: TodoModel;
};

const TodoItem = ({ task }: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const onClickDelete = () => {
    dispatch(removeTask(task.id));
  };

  const onClickEdit = () => {
    setIsEditing(true);
  };

  const onClickSave = () => {
    dispatch(editTask({ id: task.id, newText }));
    setIsEditing(false);
  };

  const onClickCancel = () => {
    setNewText(task.text);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <label className="todo-item__label">
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </label>
          <div className="todo-item__btns">
            <button className="todo-item__btn" onClick={onClickSave}>
              Save
            </button>
            <button className="todo-item__btn" onClick={onClickCancel}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="todo-item__content">{task.text}</div>
          <button className="todo-item__btn" onClick={onClickEdit}>
            Edit
          </button>
          <button className="todo-item__btn" onClick={onClickDelete}>
            X
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
