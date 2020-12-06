import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Picture from "./hpic.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <Grid className="aboutme-page">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Picture}
                alt="avatar"
                style={{ height: "200px", borderRadius: "100px" }}
              />
            </div>
          </Cell>

          <Cell className="aboutme-right-col" col={8}>
            <p>
              Creative computer engineer with experience in improving existing
              computer-based technologies, web development, systems, and
              solutions relating to creation of programming languages relevant
              to the web.
              <hr />
              I am fueled by my passion in understanding networks, operating
              systems, systems software and hardware and communications
              databases.
              <hr />
              I consider myself a ‘forever student,’ eager to both build on my
              academic foundations in Computer Engineering, Computer systems
              Networks and Web development by staying in tune with the latest
              technologies through continued coursework and professional
              development.
              <hr />
              My hunger for knowledge and determination to turn information into
              action has contributed to my success at PCCCZ Nigeria Company LTD.
              <hr />
              Currently, i work as the systems manager in PCCCZ Nigeria Company
              LTD and I’m always interested in a challenge.
            </p>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
