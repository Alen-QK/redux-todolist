import React, {useState} from "react";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";
import Bigtitle from "./components/Bigtitle";

function App() {

  return (
    <div data-testid='todo-1'>
      <Bigtitle/>
      <Todoform/>
      <Todolist/>
    </div>
  );
}

export default App;
