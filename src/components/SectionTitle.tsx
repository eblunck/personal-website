interface SectionTitle {
  title: string;
  idx: string;
}

export default function SectionTitle({ title, idx }: SectionTitle) {
  return (
    <div>
      {idx}
      {title}
    </div>
  );
}
