import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Nuora from "../../Assets/Projects/Nuora.png";
import ChatNova from "../../Assets/Projects/ChatNova.png";
import chatAppImg from "../../Assets/Projects/chat-app.png";
import cardGameImg from "../../Assets/Projects/card-game.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nuora}
              isBlog={false}
              title="Nuora"
              description="A modern and responsive social platform where users can share posts, follow others, and chat in real time. Features include user authentication, media uploads, likes/comments, and live notifications."
              ghLink="https://github.com/realtushartyagi/Nuora.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatNova}
              isBlog={false}
              title="ChatNova"
              description="An advanced AI-powered chat app with a sleek, modern interface for seamless human–bot interaction. Features include real-time messaging, smart responses, and a visually engaging UI with smooth animations."
              ghLink="https://github.com/realtushartyagi/ChatNova.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatAppImg}
              isBlog={false}
              title="Chat Application"
              description="A cozy real-time chat app where friends can connect instantly, search for each other, and share messages in a secure and friendly space with a smooth, responsive design."
              ghLink="https://github.com/realtushartyagi/Chat-Application.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cardGameImg}
              isBlog={false}
              title="Card Game"
              description="A fun and interactive card game where players pick a card, try to remember it, and enjoy the surprise as the cards reveal themselves. Simple, engaging, and perfect for testing your memory!"
              ghLink="https://github.com/realtushartyagi/Pick_a_card.git"
           />

          
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
