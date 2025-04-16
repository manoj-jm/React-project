
import Header from "./components/Header/Header"
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {


  return (
    <>
     {/* <h1 className='bg-green-300 text-3xl'>React Router </h1> */}
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
