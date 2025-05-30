import React from "react";

const Alert = ({ type, message }) => {
  const alertStyles = {
    red: "mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700",
    orange: "mt-4 p-3 bg-orange-100 border-l-4 border-orange-500 text-orange-700",
  };

  return (
    <div className={alertStyles[type]}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;