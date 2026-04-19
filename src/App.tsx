import "./App.css";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <ExperienceSection idxNumber="01" />
      <About idxNumber="02" />
    </div>
  );
}

export default App;
