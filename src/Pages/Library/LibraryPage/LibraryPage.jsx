import React from "react";
import LibraryPageContent from "../LibraryPageContent.jsx/LibraryPageContent";
import "./librarypage.css";
import YoureNotLoggedIn from "../../LoginProtectionPage/YoureNotLoggedIn/YoureNotLoggedIn";
import { useSelector } from "react-redux";
import  Sidebar  from "../../../Components/sidebar/Sidebar";

export default function LibraryPage(props) {
  const logged = useSelector((state) => state.loggedUser.user);
  return (
    <>
      <div className="libraryPageWrapper">
        <Sidebar
          theClass={
            props.showSideBar
              ? `sidebar-menu-Library active`
              : `sidebar-menu-Library`
          }
        />
        {/* <div
          style={{ width: "155px", height: "840px", border: "1px solid red" }}
        >
          sidebar
        </div> */}
        {!logged ? <YoureNotLoggedIn /> : <LibraryPageContent />}
      </div>
    </>
  );
}
