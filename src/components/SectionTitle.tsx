interface SectionTitleProps {
  title: string;
  idx: string;
  showUnderline: boolean;
}

export default function SectionTitle({
  title,
  idx,
  showUnderline,
}: SectionTitleProps) {
  return (
    <div
      id={title}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        paddingBottom: "3rem",
      }}
    >
      <span style={{ fontSize: "20px" }}>{idx}</span>
      <span
        style={{
          fontSize: "36px",
          borderBottom: showUnderline
            ? "1px solid var(--neon-green)"
            : "1px solid #fff",
        }}
      >
        {title}
      </span>
    </div>
  );
}
