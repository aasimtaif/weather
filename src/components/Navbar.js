import React from "react";
import "../styles/Navbar.css";


export default function Navbar({ setInputValue, inputValue, fetching }) {
  console.log(inputValue);
  return (
    <div className="navbar">
      <span className="heading">Weather</span>
      
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyPress={fetching}
        className="searchBar"
        type="text"
        placeholder="Search....."
      />
    </div>
  );
}