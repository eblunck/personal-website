import profilepic from "../assets/cvbild.jpeg";

export default function MenuBar() {
  return (
    <div className="menu-bar">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img className="profile-pic" width="52px" src={profilepic} />
        <span style={{ fontSize: "24px" }}>Emilia Blunck</span>
      </div>
      <div className="nav-items">
        <span className="nav-item">Experience</span>
        <span className="nav-item">Projects</span>
        <span className="nav-item">About</span>
        <span className="nav-item">Contact</span>
      </div>
    </div>
  );
}
