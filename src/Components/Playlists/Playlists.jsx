import React from "react";
import Sidebar from "../sidebar/Sidebar";

function Playlists(props) {
  return (
    <div className="playlistsPageContainer">
      <Sidebar
        theClass={
          props.showSideBar
            ? `sidebar-menu-SearchFeed active`
            : `sidebar-menu-SearchFeed`
        }
      />
      Playlists
    </div>
  );
}

export default Playlists;
