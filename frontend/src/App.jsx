import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Main from './component/main/main';
import Navbar from './component/navbar/navbar';
import AddForm from './component/navbar/addForm';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/Additem" element={<AddForm/>} />
    </Routes>
    </Router>
  )
}

export default App
