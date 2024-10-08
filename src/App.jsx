import React from "react"
import Home from "./Components/Home"
import { Route,Routes } from "react-router-dom";
import Edit from "./Components/Edit";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </>
  );
}

export default App
