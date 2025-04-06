import Home from './Page/Home/Home'
import About from './Page/About/About'
import NotFound from './Page/NotFound/NotFound'

import './App.css'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
      </Router>
    </>
  )
}

export default App
