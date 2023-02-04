import logo from './logo.svg';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import Link from 'react-router-dom';
// import Greetings from './Greeting';
import Nav from './component/Nav';
import  Footer from './component/Footer';
import R_form from'./component/R_form';
import  L_form from'./component/L_form';
import  P_form from './component/P_form';
import  My_l from './component/My_l';
import  My_p from './component/My_p';
import  My_r from './component/My_r';
import  H_C from './component/H_C';
import Logout from './component/Logout';
function App() {
  return (
    <>
    <Nav/>   
    <Routes>
        <Route path='/' element={<H_C/>}/>
        <Route path='R_form' element={<R_form/>}/>
        <Route path='L_form' element={<L_form/>}/>
        <Route path='P_form' element={<P_form/>}/>
        <Route path='My_l' element={<My_l/>}/>
        <Route path='My_r' element={<My_r/>}/>
        <Route path='My_p' element={<My_p/>}/>
        <Route path='Logout' element={<Logout/>}/>
    </Routes>
    <Footer/></> );
}
export default App