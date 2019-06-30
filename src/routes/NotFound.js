import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { FlexContainer, FlexCard } from '../components/FlexContainers';
import { AppContext } from '../contexts/AppContext';
import { NFS } from '../constants/strings';
import '../styles/not-found.css';

function NotFound() {
  const { supported, colors: { BLUE, GOLD } } = useContext(AppContext);
  return (
    !supported ? <Redirect to='/browser-not-supported' /> :
    <FlexContainer className="NFarentContainer">
      <FlexCard className="NFCard">
        <div className="NFTitles" style={{color: BLUE}}>
          <div id="NFCode">{NFS.code}</div>
          <div id="NFTitle">{NFS.title}</div>
        </div>
        <div className="NFBody">
          <div id="NFBodyBody">{NFS.body}</div>
        </div>
        <Link className="NFButton" id="NFButtonStyle" to="/" style={{backgroundColor: GOLD}}>{NFS.buttonText}</Link>
      </FlexCard>
    </FlexContainer>
  );
}

export default NotFound;