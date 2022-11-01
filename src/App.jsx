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
import { useSelector } from "react-redux";

export default function App() {
  const childRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const loggedUser = useSelector((state) => state.loggedUser.user);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuButtonClick = (e) => {
    toggleSidebar();
  };

  const handleClickOutside = (e) => {
    // console.log(e.target);
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
          <Route path="/" element={<Feed />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/channel/:channelId" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="/all-playlists" element={<Playlists />}></Route>
          <Route path="/playlist/:playlistName" element={<Playlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
