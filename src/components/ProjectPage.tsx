export interface ProjectPageProps {
  title: string;
  img_paths: Array<string>;
  description: string;
}

export default function ProjectPage({
  title,
  img_paths,
  description,
}: ProjectPageProps) {
  return (
    <div>
      <span style={{ fontSize: "36px" }}>{title}</span>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          width: "100%",
          height: "30vh",
        }}
      >
        {img_paths.map((img: string, index: number) => {
          return <img key={index} src={img} />;
        })}
      </div>
      <div>
        <span>{description}</span>
      </div>
    </div>
  );
}
