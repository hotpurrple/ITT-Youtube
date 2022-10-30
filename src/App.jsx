import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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
  Playlist,
  Playlists,
  Sidebar,
} from "./Components"; //simple import

export default function App() {
  const childRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuButtonClick = (e) => {
    toggleSidebar();
  };

  const handleClickOutside = (e) => {
    console.log(e.target);
    // if (!e.target.contains(childRef.current)) { //това е правилното условие, но....
    if (childRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener(`click`, handleClickOutside);
    return () => {
      document.removeEventListener(`click`, handleClickOutside);
    };
  }, []);

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header handleMenuButtonClick={handleMenuButtonClick} />

        <Sidebar isOpen={isOpen} forwardedRef={childRef} />

        <Routes>
          <Route path="/" element={<Feed /*showSideBar={sideBar}*/ />} />
          <Route
            path="/videos/:id"
            element={<VideoDetail /*showSideBar={sideBar}*/ />}
          />
          <Route path="/channel/:channelId" element={<ChannelDetail />} />
          <Route
            path="/search/:searchTerm"
            element={<SearchFeed /*showSideBar={sideBar}*/ />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="library"
            element={<LibraryPage /*showSideBar={sideBar}*/ />}
          />
          <Route
            path="/all-playlists"
            element={<Playlists /*showSideBar={sideBar}*/ />}
          ></Route>
          <Route
            path="/playlist/:playlistName"
            element={<Playlist /*showSideBar={sideBar}*/ />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
