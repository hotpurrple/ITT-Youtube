import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as FiIcons from "react-icons/fi";
import { useSelector } from "react-redux";
import "./sidebar.css";

export default function Sidebar(props) {
  const user = useSelector((state) => state.loggedUser.user);

  useEffect(() => {
    // console.log(props.forwardedRef.current, "sidebar.js");
  }, []);

  return (
    <div
      ref={props.forwardedRef}
      className={
        props.isOpen ? `sidebar-menu-Feed active` : `sidebar-menu-Feed`
      }
    >
      <ul className="sidebar-ul">

        {user ? (
          <>
            <li className="item-text">
              <Link to={"/"} className="sideBar-link">
                <AiIcons.AiFillHome />
                <span>Home</span>
              </Link>
            </li>
            <li className="item-text">
              <Link to={"/library"} className="sideBar-link">
                <MdIcons.MdOutlineVideoLibrary />
                <span>Library</span>
              </Link>
            </li>
            <li className="item-text">
              <Link to={"/all-playlists"} className="sideBar-link">
                <CgIcons.CgPlayList />
                <span>Playlists</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="item-text">
              <Link to={"/"} className="sideBar-link">
                <AiIcons.AiFillHome />
                <span>Home</span>
              </Link>
            </li>
            <li className="item-text">
              <Link to={"/login"} className="sideBar-link">
                <MdIcons.MdLogin />
                <span>Login</span>
              </Link>
            </li>
            <li className="item-text">
              <Link to={"/register"} className="sideBar-link">
                <FiIcons.FiUserPlus />
                <span>Register</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
