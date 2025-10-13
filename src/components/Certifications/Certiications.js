import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationsCard";
import React from "react";
import Particle from "../Particle";
// import { BsFillAwardFill } from "react-icons/bs";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I have earned:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certification-card">
            <CertificationCard
              title="JavaScript Developer"
              description="A certification that enhanced my understanding of JavaScript and frontend development. This course covered key concepts related to JS."
              issuer="Infosys Springboard"
              completionDate="April 2025"
              certLink="https://verify.onwingspan.com/1-e3a33696-0f0f-4d79-aa73-e46028d825b7"
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
    title="Front-End Web Development with Internship"
    description="In this course, I developed an AI-powered text summarizer using Replit, Node.js, Express, and the Hugging Face API."
    issuer="CodSoft"
    completionDate="March 2025"
    certLink="https://www.codsoft.in/verification/e6da69a"
          />
        </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              title="AI Tool Developer"
              description="A certification that provided a foundational understanding of Generative AI, including techniques and use cases for AI in various industries."
              issuer="Be10x"
              completionDate="March 2025"
              certLink="https://certx.in/certificate/9318e7f9-0234-4ea4-9390-efad88624b8b252216"
            />
          </Col>
          

          <Col md={4} className="certification-card">
            <CertificationCard
              title="Developing for Web Performance"
              description="A comprehensive learning path that covered both frontend web development skills, including React, JavaScript, and CSS."
              issuer="LinkedIn Learning"
              completionDate="September 2024"
              certLink="https://www.linkedin.com/learning/certificates/69cedcecb73/f767c1f77a7e637782/2d255bcce5b/9fe7515da6035fd5bfe9f"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
