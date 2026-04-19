import data from "../data/experience.json";
import SectionTitle from "./SectionTitle";

interface ExperienceProps {
  idxNumber: string;
}

export default function ExperienceSection(props: ExperienceProps) {
  return (
    <div>
      <SectionTitle title="Experience" idx={props.idxNumber} />
      <div>
        {data.map((experience) => {
          return (
            <div>
              <h3>{experience.jobTitle}</h3>
              <h3>{experience.company}</h3>
              <h3>{experience.startDate + " - " + experience.endDate}</h3>
              <p>{experience.keyWords.join(", ")}</p>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}
