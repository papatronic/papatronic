export default function BrowserInformation() {
  const userAgent = navigator.userAgent;
  let browserName = navigator.appName;
  let version = '' + parseFloat(navigator.appVersion);
  let completeVersion = parseInt(navigator.appVersion, 10);
  let nameOffset, verOffset, ix, supported = false;
  // In Opera, the true version is after "Opera" or after "Version"
  if ((verOffset = userAgent.indexOf("Opera")) !== -1) {
    browserName = "Opera";
    supported = true;
    version = userAgent.substring(verOffset + 6);
    if ((verOffset = userAgent.indexOf("Version")) !== -1)
      version = userAgent.substring(verOffset + 8);
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset = userAgent.indexOf("MSIE")) !== -1) {
    browserName = "Microsoft Internet Explorer";
    version = userAgent.substring(verOffset + 5);
  }
  // In Chrome, the true version is after "Chrome" 
  else if ((verOffset = userAgent.indexOf("Chrome")) !== -1) {
    browserName = "Chrome";
    supported = true;
    version = userAgent.substring(verOffset + 7);
  }
  // In Safari, the true version is after "Safari" or after "Version" 
  else if ((verOffset = userAgent.indexOf("Safari")) !== -1) {
    browserName = "Apple Safari";
    supported = true;
    version = userAgent.substring(verOffset + 7);
    if ((verOffset = userAgent.indexOf("Version")) !== -1)
      version = userAgent.substring(verOffset + 8);
  }
  // In Firefox, the true version is after "Firefox" 
  else if ((verOffset = userAgent.indexOf("Firefox")) !== -1) {
    browserName = "Mozilla Firefox";
    supported = true;
    version = userAgent.substring(verOffset + 8);
  }
  // In most other browsers, "name/version" is at the end of userAgent 
  else if ((nameOffset = userAgent.lastIndexOf(' ') + 1) < (verOffset = userAgent.lastIndexOf('/'))) {
    browserName = userAgent.substring(nameOffset, verOffset);
    version = userAgent.substring(verOffset + 1);
    if (browserName.toLowerCase() === browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  // trim the version string at semicolon/space if present
  if ((ix = version.indexOf(";")) !== -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(" ")) !== -1) version = version.substring(0, ix);

  completeVersion = parseInt('' + version, 10);
  if (isNaN(completeVersion)) {
    version = '' + parseFloat(navigator.appVersion);
    completeVersion = parseInt(navigator.appVersion, 10);
  }

  return {
    browserName,
    version,
    completeVersion,
    supported
  };
}