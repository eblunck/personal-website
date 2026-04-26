import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import ExperienceSection from "./components/ExperienceSection";
import MenuBar from "./components/MenuBar";
import TextSection from "./components/TextSection";
import introtext from "./data/introtext.json";
import ProjectPage from "./components/ProjectPage";
import type { ProjectPageProps } from "./components/ProjectPage";

function App() {
  const [projectPageData, setProjectPageData] =
    useState<ProjectPageProps | null>(null);
  const [showHomePage, setShowHomePage] = useState<boolean>(true);

  return (
    <div className="App">
      <MenuBar />
      {showHomePage ? (
        <>
          <TextSection text={introtext.text} />
          <ExperienceSection idxNumber="01" />
          <Projects
            idxNumber="02"
            setClickedProject={setProjectPageData}
            setShowHomePage={setShowHomePage}
          />
          <About idxNumber="03" />
        </>
      ) : projectPageData ? (
        <ProjectPage
          title={projectPageData.title}
          img_paths={projectPageData.img_paths}
          description={projectPageData.description}
        />
      ) : null}

      <span style={{ color: "lightgray", paddingBottom: "2rem" }}>
        2026 Emilia Blunck
      </span>
    </div>
  );
}

export default App;
