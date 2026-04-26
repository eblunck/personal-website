import { HashLink } from "react-router-hash-link";
import profilepic from "../assets/cvbild.jpeg";

export default function MenuBar() {
  return (
    <div className="menu-bar">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img className="profile-pic" width="52px" src={profilepic} />
        <span style={{ fontSize: "24px" }}>Emilia Blunck</span>
      </div>
      <div className="nav-items">
        <HashLink smooth to="#Experience" className="nav-item">
          Experience
        </HashLink>
        <HashLink smooth to="#Projects" className="nav-item">
          Projects
        </HashLink>
        <HashLink smooth to="#About" className="nav-item">
          About & Contact
        </HashLink>
      </div>
    </div>
  );
}
