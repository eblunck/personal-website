interface SectionTitle {
  title: string;
  idx: string;
}

export default function SectionTitle({ title, idx }: SectionTitle) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        paddingBottom: "3rem",
      }}
    >
      <span style={{ fontSize: "20px" }}>{idx}</span>
      <span style={{ fontSize: "36px" }}>{title}</span>
    </div>
  );
}
