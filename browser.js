var appVersion = navigator.appVersion;
var userAgent = navigator.userAgent;
var appName = navigator.appName;

function getBrowserInformation() {
  var version = '' + parseFloat(navigator.appVersion);
  var majorAppVersion = parseInt(navigator.appVersion, 10);
  var browserName, browserVersion, versionOffset, nameOffset, supported = true;
  if ((versionOffset = userAgent.indexOf('Chrome')) != -1) {
    browserName = 'Google Chrome';
    version = userAgent.substring(versionOffset + 7);
    // In Safari, the true version is after 'Safari' or after 'Version' 
  } else if ((versionOffset = userAgent.indexOf('Safari')) != -1) {
    browserName = 'Apple Safari';
    version = userAgent.substring(versionOffset + 7);
    if ((versionOffset = userAgent.indexOf('Version')) != -1)
      version = userAgent.substring(versionOffset + 8);
    // In Firefox, the true version is after 'Firefox' 
  } else if ((versionOffset = userAgent.indexOf('Firefox')) != -1) {
    browserName = 'Mozilla Firefox';
    version = userAgent.substring(versionOffset + 8);
    // In most other browsers, 'name/version' is at the end of userAgent 
  } else {
    browserName = 'Unknown',
    browserVersion = -1,
    supported = false;
  }

  // trim the version string at semicolon/space if present
  if ((ix = version.indexOf(';')) !== -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(' ')) !== -1) version = version.substring(0, ix);
  
  majorAppVersion = parseInt('' + version, 10);
  if (isNaN(majorAppVersion)) {
    version = '' + parseFloat(navigator.appVersion);
    majorAppVersion = parseInt(navigator.appVersion, 10);
  }

  return {
    browserName,
    version,
    supported
  };
}