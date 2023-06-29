/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Title = ({ title }) => {
  return (
    <div className="py-5 text-2xl font-bold text-white ">
      <div className="flex flex-col items-center justify-center gap-1">
        <img
          src="https://github.com/BeshoyMarkElMallah/todo-app-risidio-task/blob/121a5350248d57ff7791a4ecc8cf776750709703/public/rlogo.jpg"
          alt="todo"
          border="0"
          className="w-1/2 mx-1 my-4 rounded-lg"
        />
        {title}
      </div>
    </div>
  );
};

export default Title;
