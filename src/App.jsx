import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from './components/HomePage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <nav className="p-6 bg-gray-800 text-white">
            <Link className="p-2" to="/">Home</Link>
            <Link className="p-2" to="/page1">Page1</Link>
            <Link className="p-2" to="/page2">Page2</Link>
            <Link className="p-2" to="/page3">Page3</Link>
            <Link className="p-2" to="/page4">Page4</Link>
          </nav>
          <div className="p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
