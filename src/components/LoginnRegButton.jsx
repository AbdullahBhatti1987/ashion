import React from "react";

function LoginnRegButton({className}) {

    
  return (
    <div className={`flex gap-1 ${className}`}>
      <button onClick={() => console.log("User Login")} className="hoverText transition-text duration-200 ease-in-out">
        Login
      </button>
      /
      <button
        onClick={() => console.log("Register User")}
        className="hoverText transition-text duration-200 ease-in-out"
      >
        Register
      </button>
    </div>
  );
}

export default LoginnRegButton;
