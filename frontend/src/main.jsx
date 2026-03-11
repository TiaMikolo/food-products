import React from 'react'
import '../global.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProductListPage from './pages/ProductListPage/ProductListPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx'
import SignInPage from './pages/SignInPage/SignInPage.jsx'
import ChatPage from './pages/ChatPage/ChatPage.jsx'
import Tabs from './components/Tabs/Tabs.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tabs firstTitle="Messages" secondTitle="Amis" />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  </BrowserRouter>
)
