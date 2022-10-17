import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import FooterBlock from "./pages/FooterBlock";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="">
        <div className="font-Poppins">
          <HomePage />
          <AboutPage />
          <ExperiencePage />
          <ProjectsPage />
          <ContactPage />
          <FooterBlock />
        </div>
      </div>
    </>
  );
}

export default App;
