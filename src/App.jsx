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
    Playlist,
    Playlists,
} from "./Components"; //simple import
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
function App() {
    const [sideBar, setSideBar] = useState(false);
    const toggleSidebar = () => setSideBar(!sideBar);

    const [theSearchedTerm, setTheSearchedTerm] = useState("");

    const setTheTerm = (term) => {
        setTheSearchedTerm(term);
    };

    const handleMenuButtonClick = (e) => {
        // console.log(e);
        toggleSidebar();
        console.log(sideBar);
    };

    return (
        <>
            <div className="darkModeWrapper">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <BrowserRouter>
                    <Header
                        handleMenuButtonClick={handleMenuButtonClick}
                        setTheTerm={setTheTerm}
                    />
                    <Routes>
                        <Route path="/" element={<Feed showSideBar={sideBar} />} />
                        <Route
                            path="/videos/:id"
                            element={<VideoDetail showSideBar={sideBar} />}
                        />
                        <Route path="/channel/:channelId" element={<ChannelDetail />} />
                        <Route
                            path="/search/:searchTerm"
                            element={
                                <SearchFeed showSideBar={sideBar} term={theSearchedTerm} />
                            }
                        />
                        <Route path="*" element={<ErrorPage />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route
                            path="library"
                            element={<LibraryPage showSideBar={sideBar} />}
                        />
                        <Route
                            path="/all-playlists"
                            element={<Playlists showSideBar={sideBar} />}
                        >
                            {/* <Route
              path=":playlistName"
              element={<Playlist showSideBar={sideBar} />}
            /> */}
                        </Route>
                        <Route
                            path="/playlist/:playlistName"
                            element={<Playlist showSideBar={sideBar} />}
                        />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
            </div>
        </>
    );
}

export default App;
