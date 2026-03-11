import React from 'react'
import '../global.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProductListPage from './pages/ProductListPage/ProductListPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx'
import SignInPage from './pages/SignInPage/SignInPage.jsx'
import ChatPage from './pages/ChatPage/ChatPage.jsx'
import OnlineFriends from './components/OnlineFriends/OnlineFriends.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<OnlineFriends name="Rojo M." indicator="● En ligne" firstIcon="✉" lastIcon="✕" />}
      />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  </BrowserRouter>
)
