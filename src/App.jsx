import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Header,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  ErrorPage,
} from "./Components"; //simple import
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
