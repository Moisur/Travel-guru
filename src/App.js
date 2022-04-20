import './App.css';
import Navbar from './compnents/Pages/Navbar/Navbar';
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import News from './compnents/Pages/News/News';
import Destination from './compnents/Pages/Destination/Destination';
import Blog from './compnents/Pages/Blog/Blog';
import Contact from './compnents/Pages/Contact/Contact';
import Login from './compnents/Pages/Login/Login';
import Register from './compnents/Pages/Register/Register';
function App() {
  const location = useLocation()
  const path =location.pathname
  return (
    <div className={path.includes('/news')?'containers':path.includes('/destination')?'containers':'none'}>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<News></News>}></Route>
      <Route path='/news' element={<News></News>}></Route>
      <Route path='/destination' element={<Destination></Destination>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
     </Routes>
    </div>
  );
}

export default App;
