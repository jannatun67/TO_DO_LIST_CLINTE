import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router"
import AuthProvider from './AuthProvider/AuthProvider'
import MainPage from './Layout/MainPage'
import MainLayout from './Layout/MainLayout'
import PrivetRoute from './Route/PrivetRoute'
import HomePage from './Pages/HomePage'
import ManageAllTask from './Component/ManageAllTask'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <BrowserRouter>
     <Routes>

    <Route path='/MainPage'  element={<MainPage></MainPage>}></Route>

    <Route  element={<PrivetRoute><MainLayout></MainLayout></PrivetRoute>}>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/ManageAllTask' element={<ManageAllTask></ManageAllTask>}></Route>
   
    </Route>

  </Routes>
  </BrowserRouter>
   </AuthProvider>
  </StrictMode>,
)
