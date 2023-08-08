import GlobalStyle from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Project from "./components/Project";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div className="text-white min-h-screen">
        <GlobalStyle />
          <NavBar />
          <Home />
          <Work />
          <Project />
          <Skills />
          <Achievement />
          <Contact />
          <Footer />
      </div>
  );
}

export default App
