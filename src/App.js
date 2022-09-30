import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="font-Poppins">
          <HomePage />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <AboutPage />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ExperiencePage />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ProjectsPage />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ContactPage />
        </div>
      </div>
    </>
  );
}

export default App;
