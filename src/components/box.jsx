/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Box = ({ children,className }) => {
  return (
    <div className="py-10">
      <div className={"flex flex-col justify-center rounded-md mx-24 bg-green-950 items-center"}>
        {children}
      </div>
    </div>
  );
};

export default Box;
