import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Mulesoft Developer",
          "Fullstack website Developer",
          "Fullstack Java Developer-Spring-boot",
          "Backend Engineer",
        

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
