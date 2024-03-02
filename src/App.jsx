import "./App.css";
import { useState } from "react";

// Components //
import Header from "./components/Header";
import Table from "./components/Tabel";

function App() {
  const [task, setTask] = useState("");
  const [inputValue, setInputValue] = useState([]);

  return (
    <>
      <Header setTask={setTask} task={task} input={inputValue} />
      <Table inputValue={inputValue} />
    </>
  );
}

export default App;
