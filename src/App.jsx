import "./styles.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Sevice from "./components/service/Service";
import Experience from "./components/experience/Experience";
import Library from "./components/library/Library";
import Coments from "./components/coments/Coments";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Sevice />
      <Library />
      <Coments />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
