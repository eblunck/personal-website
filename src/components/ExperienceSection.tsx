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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "3rem",
              }}
            >
              <div>
                <div style={{ fontSize: "24px", paddingBottom: "1rem" }}>
                  <span>{experience.jobTitle}, </span>
                  <span style={{ fontStyle: "italic" }}>
                    {experience.company}
                  </span>
                </div>
                <span style={{ fontSize: "16px" }}>
                  {experience.keyWords.join(", ")}
                </span>
              </div>
              <span style={{ fontSize: "24px" }}>
                {experience.startDate + " - " + experience.endDate}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
