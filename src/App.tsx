import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import ExperienceSection from "./components/ExperienceSection";
import MenuBar from "./components/MenuBar";
import TextSection from "./components/TextSection";
import introtext from "./data/introtext.json";

function App() {
  return (
    <div className="App">
      <MenuBar />

      <TextSection text={introtext.text} />
      <ExperienceSection idxNumber="01" />
      <Projects idxNumber="02" />
      <About idxNumber="03" />

      <span style={{ color: "lightgray", paddingBottom: "2rem" }}>
        2026 Emilia Blunck
      </span>
    </div>
  );
}

export default App;
