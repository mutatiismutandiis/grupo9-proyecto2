import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import styleTask from "./todoTask.module.css"

const TodoTask = ({ task, toggleTask, removeTask}) => {
  const { incrementCompletedTasks, decrementCompletedTasks } =
    useContext(TodoContext);

  return (
    <div className={styleTask.taskList}>
      <input
        className={styleTask.checkBox}
        type="checkbox"
        checked={task.completed}
        onChange={(e) => {
          toggleTask(task.id);
          e.target.checked
            ? incrementCompletedTasks()
            : decrementCompletedTasks();
        }}
      />
      <h3 className={styleTask.task}>{task.title}</h3>
      <button
      className={styleTask.buttonRemove}
        onClick={(e) => {
          removeTask(task.id);
          task.completed && decrementCompletedTasks();
        }}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoTask;
