import React from 'react'
import '../global.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProductListPage from './pages/ProductListPage/ProductListPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx'
import SignInPage from './pages/SignInPage/SignInPage.jsx'
import ChatPage from './pages/ChatPage/ChatPage.jsx'
import RoomCard from './components/RoomCard/RoomCard.jsx'
import UserRole from './components/UserRole/UserRole.jsx'
// import MessageBar from './components/MessageBar/MessageBar.jsx'
// import Tabs from './components/Tabs/Tabs.jsx'
// import Bubble from './components/Bubble/Bubble.jsx'
// import SearchInput from './components/SearchInput/SearchInput.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <RoomCard
            icon="💬"
            roomName="Design Team"
            member="5 membres"
            message="Mikolo: Super idée 🔥"
            number="2"
            badge={true}
          />
        }
      />
      {/* <Route path="/" element={<Tabs firstTitle="Messages" secondTitle="Amis" />} /> */}
      {/* <Route
        path="/"
        element={
          <Bubble
            message="Salut ! Tu as vu le dernier design ?"
            type="bubbleThem"
            name="Mikolo"
            time="10:45"
          />
        }
      /> */}
      {/* <Route
        path="/"
        element={
          <MessageBar
            firstIcon="😊"
            secondIcon="📎"
            placeholder="Ecrire un message..."
            thirdIcon="➤"
          />
        }
      /> */}
      {/* <Route path="/" element={<SearchInput placeholder="Rechercher..." />} /> */}
      {/* <Route path="/" element={<UserRole role="Sender" placeholder="Ayoton" button="▷" />} /> */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  </BrowserRouter>
)
