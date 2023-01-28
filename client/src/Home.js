import TaskList from "./taskList"

import {useState} from 'react'

import backdrop from "./backdrop.png"
import logo from "./logo.svg"

import "./App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskList/>
      </header>
    </div>
  );
}

export default Home;
