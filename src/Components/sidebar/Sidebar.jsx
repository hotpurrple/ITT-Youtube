import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { sidebarData } from "./sidebarData";
import "./sidebar.css";

export default function Sidebar(props) {
  console.log(props);
  return (
    <div className={props.theClass}>
      <ul className="sidebar-ul">
        {sidebarData.map((el, idx) => {
          return (
            <li key={idx} className={el.cName}>
              <Link to={el.path} className="sideBar-link">
                {el.icon}
                <span>{el.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
