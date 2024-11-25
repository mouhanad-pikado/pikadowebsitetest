import { Outlet  } from 'react-router-dom'
import Navbar from '../navbar/Navbar.jsx';
// import Footer from '../Footer/Footer.jsx';

export default function Layout() {
   



  return (
    <>
    <Navbar/>
    <div className=" px-0 ">

     <Outlet/>
    </div>
     {/* <Footer/> */}
    </>
   
  )
}