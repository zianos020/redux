import React from "react";
import "./App.css"
import AddTask from "./Comp/addtask/AddTask"
import ListTask from "./Comp/listTask/ListTask"

function App() {
  return (
    <div className="App">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
