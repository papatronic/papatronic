import React, { useContext } from 'react';
import { FlexContainer, FlexCard } from '../components/FlexContainers';
import { AppContext } from '../contexts/AppContext';
import { BNSS } from '../constants/strings';
import googleChromeLogo from '../assets/google_chrome_logo.png';
import mozillaFirefoxLogo from '../assets/mozilla_firefox_logo.png';
import appleSafariLogo from '../assets/apple_safari_logo.png';
import '../styles/browser-not-supported.css';

function BrowserNotSupported() {
  const { colors: { BLUE, GOLD } } = useContext(AppContext);
  return (
    <FlexContainer className="BNSParentContainer">
      <FlexCard className="BNSCard">
        <div style={{color: BLUE}} className="BNSTitle">
          <h3>{BNSS.title}</h3>
        </div>
        <div className="BNSBody">
          <p>
            Tu navegador no es compatible con las tecnologías que utilizamos. 
            Para la correcta visualización de éste sitio es necesario que nos 
            visites desde <a target="_blank" rel="noopener noreferrer" href={BNSS.googleChromeDownloadLink} style={{color: GOLD}}>Google Chrome</a>, <a target="_blank" rel="noopener noreferrer" href={BNSS.mozillaFirefoxDownloadLink} style={{color: GOLD}}>Mozilla Firefox</a> o Apple Safari.
          </p>
        </div>
        <FlexCard className="BNSImageContainer">
          <img src={mozillaFirefoxLogo} className="BNSBrowsersImage" alt="Navegador Mozilla Firefox"></img>
          <img src={appleSafariLogo} className="BNSBrowsersImage" alt="Navegador Apple Safari"></img>
          <img src={googleChromeLogo} className="BNSBrowsersImage" alt="Navegador Google Chrome"></img>
        </FlexCard>
      </FlexCard>
    </FlexContainer>
  );
}

export default BrowserNotSupported;