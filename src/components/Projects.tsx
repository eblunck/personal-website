import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import type { Dispatch, SetStateAction } from "react";
import type { ProjectPageProps } from "./ProjectPage";

interface ProjectsProps {
  idxNumber: string;
  setClickedProject: Dispatch<SetStateAction<ProjectPageProps | null>>;
  setShowHomePage: Dispatch<SetStateAction<boolean>>;
}

export default function Projects({
  idxNumber,
  setClickedProject,
  setShowHomePage,
}: ProjectsProps) {
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
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              style={{ cursor: "pointer", width: "100%" }}
              onClick={() => {
                setClickedProject({
                  title: project.title,
                  description: project.long_description,
                  img_paths: project.img_paths,
                });
                setShowHomePage(false);
              }}
            >
              <ProjectCard
                img_path={project.img_card_path}
                description={project.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
