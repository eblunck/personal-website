import SectionTitle from "./SectionTitle";

interface AboutProps {
  idxNumber: string;
}

export default function About(props: AboutProps) {
  return (
    <div>
      <SectionTitle title="About" idx={props.idxNumber} />
    </div>
  );
}
