import Hero from "./pages/Hero";
import AboutPage from "./pages/AboutPage";
// TODO:remove import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import FooterBlock from "./pages/FooterBlock";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="font-Poppins">
        <Hero />
        <AboutPage />
        {/* <ExperiencePage/> */}
        <ProjectsPage />
        <ContactPage />
        <FooterBlock />
      </div>
    </>
  );
}

export default App;
