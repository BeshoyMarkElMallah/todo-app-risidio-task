/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {

const handleDelete = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
}

const handleDone = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
}

const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
}

const handleDateVal = (todo) => {
    console.log(`todo Date ${todo.date}`);
    const currentDate = new Date();
    todo.date = new Date(todo.date);
    const daysleft =  todo.date? Math.ceil((todo.date - currentDate) / (1000 * 60 * 60 * 24)) : 0;
    return daysleft;
}

  return (
    <div>
      {todos.map((todo) => (
        <li
          className="flex px-4 py-3 my-6 list-none border border-gray-500 rounded-lg"
          key={todo.id}
        >
          <input
            type="text"
            value={todo.title}
            className={"text-2xl text-wblack bg-transparent border-b-2 border-transparent focus:outline-none" + (todo.completed ? " line-through text-gray-400" : "")}
            onChange={(e) => event.preventDefault()}
          />
          <input
            type="text"
            value={handleDateVal(todo) + ' days left'}
            className={"text-2xl text-black bg-transparent border-b-2 border-transparent focus:outline-none" + (todo.completed ? " line-through text-gray-400" : "")}
            onChange={(e) => event.preventDefault()}
          />
          <div className="flex gap-4">
            <button className="text-2xl text-red-600" onClick={()=>handleDone(todo)}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>
            <button className="text-2xl text-yellow-500" onClick={()=>handleEdit(todo)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="text-2xl text-teal-400" onClick={()=>handleDelete(todo)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
