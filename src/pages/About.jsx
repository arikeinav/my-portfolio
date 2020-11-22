import React from "react";
import { Avatar } from "@material-ui/core";

export function About() {
  return (
    <div id="about" className="about flex space-between align-center">
      <div className="about-avatar">
        <Avatar
          src={require("../styles/images/me2.jpg")}
          style={{ height: "150px", width: "150px", marginTop: "0" }}
        />
      </div>
      <div>
        <div className="general flex column">
          <p>
            A Full Stack Web Developer, passionate about solving challenges,
            creating new projects, and spending hours on coding. Experienced in
            writing single-page-applications using the latest WEB technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
