import {Routes,Route} from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'
import './App.css'
import HomePage from './components/homepage/HomePage'
import Contact from './components/user/contactpart/Contact'
import Ajout from './components/user/contactpart/Ajout'


function App() {
  return (
    <div className='App' >
{/* <Navbar/> */}
      <Routes>
        <Route  path='/' element={<Register/>}   />
        <Route path='/login' element={<Login/>}/>
<Route path="/home" element={<HomePage/>}/>


<Route path="/con" element={<Contact/>}/>
<Route path='/ajout' element={<Ajout/>}/>
      </Routes>
    </div>
  );
}

export default App;
