import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Tasks from "./pages/Tasks";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
