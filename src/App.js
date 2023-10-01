import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";

let App = () => {
  return (
    <div>
        <Header/>
      <h1>hello</h1>
    
    </div>
    
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
