import React from "react";
import MainPage from "./components/pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookPage from "./components/pages/BookPage";
import FAQPage from "./components/pages/FAQPage";
import SearchPage from "./components/pages/SearchPage";
import ProfilePage from "./components/pages/ProfilePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/book' element={<BookPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </Router>
  )
}

export default App;