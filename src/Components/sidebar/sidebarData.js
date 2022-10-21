import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const sidebarData = [
  {
    name: "home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "item-text",
  },
  {
    name: "Library",
    path: "/library",
    icon: <MdIcons.MdOutlineVideoLibrary />,
    cName: "item-text",
  },
  {
    name: "History",
    path: "/history",
    icon: <AiIcons.AiOutlineHistory />,
    cName: "item-text",
  },
  {
    name: "Liked",
    path: "/liked",
    icon: <AiIcons.AiOutlineLike />,
    cName: "item-text",
  },
];
