import Nav from "./pages/nav/Nav";
import Projects from "./pages/Projects section/ProjectSection";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About me/AboutMe";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
