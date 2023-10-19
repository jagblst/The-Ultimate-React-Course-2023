import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="stickers-heisenberg.jpg" alt="avatar-img" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Jaga Lysyi Boroda</h1>
      <p>
        {" "}
        Future full-stack web developer. When not coding or learning English, I
        like to play football, board games, or to just enjoy the sun at the
        beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="👍🏼" color="orangered" />
      <Skill skill="JavaScript" emoji="✌🏼" color="yellow" />
      <Skill skill="React" emoji="💪🏼" color="#61DBFB" />
      <Skill skill="Git and GitHub" emoji="🤝" color="grey" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
