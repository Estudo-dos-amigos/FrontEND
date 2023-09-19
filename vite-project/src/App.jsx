import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ForgetPassword } from "./Components/ForgetPassword"
import { Register } from "./Components/Register"
import { LoginPage } from './Components/LoginPage'

export function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  )
}