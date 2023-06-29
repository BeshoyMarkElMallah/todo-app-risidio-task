/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Form = ({
  val,
  setval,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
  date,
  setDate,
}) => {
  const onInputChange = (e) => {
    setval(e.target.value);
  };

  const onDateChange = (date) => {
    console.log(date);
    setDate(date);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        { id: uuidv4(), title: val, completed: false, date: date },
      ]);
      setval("");
      setDate(null);

    } else {
      const updateTodo = todos.map((todo) =>
        todo.id === editTodo.id ? { ...todo, title: val, date: date } : todo
      );
      setTodos(updateTodo);
      setEditTodo(""); 
      setval("");
      setDate(null);

      
    }
  };

  useEffect(() => {
    if (editTodo) {
      setval(editTodo.title);
      setDate(editTodo.date);
    } else {
      setval("");
      setDate(null);
    }
  }, [setval, editTodo, setDate]);

  return (
    <form onSubmit={onFormSubmit} className="flex items-center">
    <div className="flex items-center">

      <input
        type="text"
        placeholder="Enter a Todo"
        className="px-4 py-3 mx-5 my-5 text-lg text-white bg-black border border-gray-400 rounded-lg "
        value={val}
        required
        onChange={onInputChange}
      />
      <DatePicker
        className="px-4 py-3 mx-5 my-5 text-lg text-white bg-black border border-gray-400 rounded-lg "
        selected={date}
        onChange={date => onDateChange(date)}
        placeholderText="Select a date"
        minDate={new Date()}
        dateFormat={"yyyy-MM-dd"}
        readOnly={false}
        required
      />
    </div>
      <button
        type="submit"
        className="h-full px-5 py-3 text-lg rounded-lg bg-amber-500"
      >
        {editTodo ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Form;
