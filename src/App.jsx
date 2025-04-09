import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import PrestationsPage from './Pages/PrestationsPage'
import ContactPage from './Pages/ContactPage'
import AproposPage from './Pages/AproprosPage'
import FormulairePage from './Pages/FormulairePage'
import NavBar from './Component/NavBar'
import PageAdmin from './Pages/PageAdmin';
import PageProfil from './Pages/PageProfil';
import AuthContext from './Context/AuthContext';
import AuthService from './Services/AuthService';
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import Footer from './Component/Footer';
import CGUS from './Pages/CGUS';
import FAQ from './Pages/FAQ';
import RecapPage from './Pages/RecapPage';
import ReservationPage from './Pages/ReservationPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isValid());
  const [user, setUser] = useState(AuthService.getUser());
  

  return (
    <>
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/Prestations' element={<PrestationsPage></PrestationsPage>}></Route>
        <Route path='/Contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='/Apropos' element={<AproposPage></AproposPage>}></Route>
        <Route path='/Formulaire' element={<FormulairePage></FormulairePage>}></Route>
        <Route path='/PageAdmin' element={<PageAdmin></PageAdmin>}></Route>
        <Route path='/PageProfil' element={<PageProfil></PageProfil>}></Route>
        <Route path='/CGUS' element={<CGUS></CGUS>}></Route>
        <Route path='/FAQ' element={<FAQ></FAQ>}></Route>
        <Route path='/Recap' element={<RecapPage></RecapPage>}></Route>
        <Route path='/Reservation' element={<ReservationPage></ReservationPage>}></Route>
      </Routes>
      <Footer></Footer>
      
      <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
      
      </BrowserRouter>
      {/* <Footer></Footer> */}
      
      </AuthContext.Provider>
    </>
  )
}

export default App
