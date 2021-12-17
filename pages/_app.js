import '../styles/globals.css'
//font awesome imports
import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleLeft, faAngleRight, faEnvelope, faMobileAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
library.add(faAngleLeft, faAngleRight, faEnvelope, faMobileAlt, faTimes);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
