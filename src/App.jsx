import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
} from "./Components"; //simple import

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
