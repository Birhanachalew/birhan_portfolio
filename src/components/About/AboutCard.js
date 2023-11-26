import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Birhan Aschalew </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I am a software engineer by profession.
            <br />
            I pursued my bachelor's degree in software engineering at Addis Ababa Institution of Technology.
            <br />
            <br /> In addition to coding, I have a passion for various activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> my favorite activities is playing basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> I also love traveling and exploring new places.
            </li>
            <li className="about-activity">
              <ImPointRight /> I love participating in various social and entrepreneurial activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “There is no greater reward than working from your heart, and making a difference in the world.”
{" "}
          </p>
          <footer className="blockquote-footer">Birhan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
