import React from "react";
import LibraryPageContent from "../LibraryPageContent/LibraryPageContent";
import "./librarypage.css";
import YoureNotLoggedIn from "../../LoginProtectionPage/YoureNotLoggedIn/YoureNotLoggedIn";
import { useSelector } from "react-redux";

export default function LibraryPage() {
  const logged = useSelector((state) => state.loggedUser.user);
  return (
    <>
      <div className="libraryPageWrapper">
        {!logged ? <YoureNotLoggedIn /> : <LibraryPageContent />}
      </div>
    </>
  );
}
