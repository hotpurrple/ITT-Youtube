import React, { useState } from "react";
import "./playlists.css";
import Sidebar from "../sidebar/Sidebar";
import getUserPlaylists from "../../server/getUserPlaylists";
import PlaylistsPlaylistCard from "../PlaylistsPlaylistCard/PlaylistsPlaylistCard";
import { Outlet } from "react-router-dom";

function Playlists(props) {
  const [userPlaylists, setUserPlaylists] = useState(getUserPlaylists());

  return (
    <div className="playlistsPageContainer">
      <Sidebar
        theClass={
          props.showSideBar
            ? `sidebar-menu-SearchFeed active`
            : `sidebar-menu-SearchFeed`
        }
      />

      <div className="playlistsCardsContainer">
        {userPlaylists.map((pList) => (
          <PlaylistsPlaylistCard pListData={pList} key={pList.title} />
        ))}

        {/* <div className="pListCard">
          <Link to={`/playlists/:playlistName`}>
            <img
              className="pListCardImg"
              src="https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg"
              alt=""
            ></img>
          </Link>

          <div className="videosInfoDIv">60 videos</div>
        </div> */}
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default Playlists;
