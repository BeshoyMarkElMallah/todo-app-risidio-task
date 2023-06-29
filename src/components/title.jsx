/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Title = ({ title }) => {
  return (
    <div className="py-5 text-2xl font-bold text-white ">
      <div className="flex flex-col items-center justify-center gap-1">
        <img
          src="/static/images/rlogo.jpg"
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
