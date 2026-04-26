import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

interface ProjectsProps {
  idxNumber: string;
}

export default function Projects({ idxNumber }: ProjectsProps) {
  const [mouseInSection, setMouseInSection] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setMouseInSection(true)}
      onMouseLeave={() => setMouseInSection(false)}
    >
      <SectionTitle
        title="Projects"
        idx={idxNumber}
        showUnderline={mouseInSection}
      />
      <div style={{ display: "flex", gap: "16px", minWidth: "100%" }}>
        {projects.map((project) => {
          return (
            <ProjectCard
              img_path={project.img_card_path}
              description={project.title}
            />
          );
        })}
      </div>
    </div>
  );
}
