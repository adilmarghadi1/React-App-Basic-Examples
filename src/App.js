import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from './components/pages/About';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import ErrorPage from './components/pages/ErrorPage';
import Contact from './components/pages/Contact'
function App() {
  return (
        

      <Router> 
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/header'>Header</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>} />
          <Route path='/header' element={<Header/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>


    
   
  );
  
}

export default App;