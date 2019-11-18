const NotFoundStrings = {
  code: '404',
  title: 'Página no encontrada',
  body: 'La ruta a la que quieres acceder ha sido movida temporalmente, no existe o ha sido renombrada.',
  buttonText: 'PÁGINA PRINCIPAL'
}

const BrowserNotSupportedStrings = {
  title: 'Tu navegador no es compatible con ésta aplicación.',
  googleChromeDownloadLink: 'https://www.google.com/chrome/b/',
  mozillaFirefoxDownloadLink: 'https://www.mozilla.org/en-US/firefox/new/'
};

const ModalTexts = {
  destinationCitiesError: '',
  originCitiesError: '',
  predictionError: ''
};

const InstitutionName = 'Tecnológico Nacional de México | Instituto Tecnológico de Culiacán'
const DailyPriceText = 'Precio estimado para';
const About = 'Acerca de';
const Us = 'Nosotros';

const ErrorInRequestModal = {
  title: 'Ocurrió un problema',
  message: 'Al parecer ocurrió un problema conectando con nuestro servidor. Espere un momento y de click en continuar.'
};

const AboutTheSite = {
  title: 'Acerca de este sitio',
  message: ''
};

export { 
  NotFoundStrings as NFS,
  BrowserNotSupportedStrings as BNSS,
  ModalTexts as MSS,
  InstitutionName,
  DailyPriceText,
  About,
  Us,
  AboutTheSite,
  ErrorInRequestModal,
};