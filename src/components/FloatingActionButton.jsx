import React from "react";
import "./FloatingActionButton.css";


export default function FloatingActionButton({ onClick }) {
  return (
    
    <button className="fab" onClick={onClick}>
        Logout
    </button>
  );
}