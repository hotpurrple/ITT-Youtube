import React from "react";
import { Link } from "react-router-dom";

import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as FiIcons from "react-icons/fi";

import { sidebarData } from "./sidebarData";

import "./sidebar.css";
import { useSelector } from "react-redux";

export default function Sidebar(props) {
  // const activeUser = useSelector((state) => state.activeUser);
  // console.log(props);
  return (
    <div className={props.theClass}>
      <ul className="sidebar-ul">
        {/* {sidebarData.map((el, idx) => {
          return (
            <li key={idx} className={el.cName}>
              <Link to={el.path} className="sideBar-link">
                {el.icon}
                <span>{el.name}</span>
              </Link>
            </li>
          );
        })} */}
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
          <Link to={"/history"} className="sideBar-link">
            <AiIcons.AiOutlineHistory />
            <span>History</span>
          </Link>
        </li>
        <li className="item-text">
          <Link to={"/liked"} className="sideBar-link">
            <AiIcons.AiOutlineLike />
            <span>Liked</span>
          </Link>
        </li>
        <li className="item-text">
          <Link to={"/playlist"} className="sideBar-link">
            <CgIcons.CgPlayList />
            <span>Playlist</span>
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
      </ul>
    </div>
  );
}
