import React from "react";
import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="app-container">
        <Sidebar />
        <Main />
    </div>
  );
};

export default App;
