import React from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import TodoAdd from './Components/TodoAdd';
import TodoList from './Components/TodoList';
function App() {


    return ( <div>
        <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<TodoAdd />} />
          <Route path="/todoadd" element={<TodoAdd />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
        </BrowserRouter>
    </div> );
}

export default App


