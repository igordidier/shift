import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import ReactGA from 'react-ga';


const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));
const TRACKING_ID = "UA-187799678-1"; 
ReactGA.initialize(TRACKING_ID);


function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
