import React from 'react'
import LibraryPageContent from '../LibraryPageContent.jsx/LibraryPageContent';
import "./librarypage.css"
import YoureNotLoggedIn from '../YoureNotLoggedIn/YoureNotLoggedIn';
import { useSelector } from 'react-redux';
export default function LibraryPage() {
    const logged = useSelector(state => state.loggedUser.user)
  return (
    <>
    <div className='libraryPageWrapper'>
    <div style={{width: "155px", height: "840px",  border: "1px solid red"}}>sidebar</div>
        {!logged ? <YoureNotLoggedIn/> : <LibraryPageContent/>}
    </div>
    </>
  )
}
