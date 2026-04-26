interface ProjectCardProps {
  img_path: string;
  description: string;
}

export default function ProjectCard({
  img_path,
  description,
}: ProjectCardProps) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: "60vh", backgroundColor: "gray" }}>
        <img src={img_path}></img>
      </div>
      <p>{description}</p>
    </div>
  );
}
