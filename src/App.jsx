import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CssBaseline } from "@mui/material"; ///CSSBaseLine - нещо, като глобален ресет на стилове. Нещо, като reset.css - иначе ми се разместват рендерираните видеа

import {
  Header,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  ErrorPage,
  Login,
  Register,
  LibraryPage,
} from "./Components"; //simple import

function App() {
  const [sideBar, setSideBar] = useState(false);
  const toggleSidebar = () => setSideBar(!sideBar);

  const handleMenuButtonClick = (e) => {
    // console.log(e);
    toggleSidebar();
    console.log(sideBar);
  };
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header handleMenuButtonClick={handleMenuButtonClick} />
        <Routes>
          <Route path="/" element={<Feed showSideBar={sideBar} />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route
            path="/search/:searchTerm"
            element={<SearchFeed showSideBar={sideBar} />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="library" element={<LibraryPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
