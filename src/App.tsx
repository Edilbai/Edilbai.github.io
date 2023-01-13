import React ,{useState}from 'react';

import {  Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage';
import { UserPage } from './pages/UserPage';
import { LastPage } from './pages/LastPage';




export const App:React.FC =()=>{
 
return (
  <div className='App'>
 
 
  <Routes>
<Route  path="/" element={<MainPage/>} />
<Route  path="/user" element={<UserPage />} />
  {/* <Route path='/wall' element={<LastPage  />}/> */}


  


  </Routes>

  </div>
)
}

export default App;