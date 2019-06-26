import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import { NFS } from '../constants/strings';
import '../styles/not-found.css';

function NotFound() {
  const { supported, colors: { BLUE, GOLD } } = useContext(AppContext);
  return (
    !supported ? <Redirect to='/browser-not-supported' /> :
    <div className="NFarentContainer">
      <div className="NFCard">
        <div className="NFTitles" style={{color: BLUE}}>
          <div id="NFCode">{NFS.code}</div>
          <div id="NFTitle">{NFS.title}</div>
        </div>
        <div className="NFBody">
          <div id="NFBodyBody">{NFS.body}</div>
        </div>
        <Link className="NFButton" id="NFButtonStyle" to="/" style={{backgroundColor: GOLD}}>{NFS.buttonText}</Link>
      </div>
    </div>
  );
}

export default NotFound;