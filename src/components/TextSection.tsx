import ContactBar from "./ContactBar";

interface TextSectionProps {
  text: string;
}

export default function TextSection({ text }: TextSectionProps) {
  return (
    <div>
      <div style={{ width: "60%", marginBottom: "1rem" }}>
        <span style={{ fontSize: "36px" }}>{text}</span>
      </div>
      <ContactBar />
    </div>
  );
}
