import React, { useState } from "react";
import TodoView from "./view/TodoView";
import { TodoContext } from "./context/TodoContext";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";

const App = () => {
  const [completedTasks, setCompletedTasks] = useState(0);

  const incrementCompletedTasks = () => {
    setCompletedTasks(completedTasks + 1);
  };

  const decrementCompletedTasks = () => {
    setCompletedTasks(completedTasks - 1);
  };

  return (
    <TodoContext.Provider
      value={{
        completedTasks,
        incrementCompletedTasks,
        decrementCompletedTasks,
      }}
    >
      <TodoView />
      <CompletedTasks />
    </TodoContext.Provider>
  );
};

export default App;