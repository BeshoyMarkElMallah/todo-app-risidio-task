/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Box from "./components/box";
import Title from "./components/title";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

function App() {
  const initStorage = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initStorage);
  const [editTodo, setEditTodo] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="h-screen bg-black">
      <Box className={"justify-items-center "}>
        
        <Title title="Todo-List" />
        <Form
          val={input}
          setval={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          date={date}
          setDate={setDate}
        />

        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </Box>
    </div>
  );
}

export default App;
