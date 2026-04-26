import { useState } from "react";
import SectionTitle from "./SectionTitle";

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
      <div></div>
    </div>
  );
}
