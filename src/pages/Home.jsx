import React, { Component } from "react";
import { List } from "../cmps/List";
import { About } from "../pages/About";
import { Stacks } from "../cmps/Stacks";
import Sky from "react-sky";
import react from "../styles/images/react.png";
import html from "../styles/images/html.png";
import js from "../styles/images/js.png";
import css from "../styles/images/css.png";
import { Contact } from "../cmps/Contact";
import { Avatar } from "@material-ui/core";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

export class Home extends Component {
  state = {
    projects: [
      {
        name: "TASKIT",
        desc:
          "Taskit is a collaboration tool that organizes your projects into boards. At one glance, Taskit tells you what's being worked on, who's working on what, and where something is in a process. The Taskit app is an end-to-end project based on React at the frontend and Node and MongoDB Atlas (serverless DB) at the backend.",
        date: "14/07/2020",
        imgUrlName: "taskit",
        url: "https://taskit-app2020.herokuapp.com/#/",
      },
      {
        name: "MEMEGEN",
        desc:
          "My Meme Generator allows you to add custom text to images. Using HTML5 Canvas, your images are created instantly on your own device. Edit, customize it and send it to your friends!!!",
        date: "30/07/2020",
        imgUrlName: "meme",
        url: "https://arikeinav.github.io/Meme-Generator/",
      },
      {
        name: "Email-App",
        desc:
          "My first React App, a simple, elegant mail app, which allows you to manage your mail easily",
        date: "14/07/2020",
        imgUrlName: "email",
        url: "https://arikeinav.github.io/Email/",
      },
      {
        name: "MINESWEEPER",
        desc:
          "My take on the classic famous game. This was my very first project. Try it, its fun!!!",
        date: "14/07/2020",
        imgUrlName: "mines",
        url: "https://arikeinav.github.io/Minesweeper/",
      },
    ],
  };

  render() {
    const p1 = "{";
    const p5 = "}";
    return (
      <div
        className="main-app"
        style={{ position: "relative", maxHeight: "17000px" }}
      >
        <Sky
          images={{
            0: react,
            1: html,
            2: js,
            3: css,
          }}
          how={600}
          time={100}
          size={"13px"}
          background={"#2c2929"}
        />
        <div className="navbar">
          <div className="nav-tag flex align-center space-between">
            <a href="#home">HOME</a>
            <a href="#Projects">PROJECTS</a>
            <a href="#tech">STACKS</a>
            <a href="#about">ABOUT</a>
            <a className="resume" href="https://docdro.id/YMRxOwS" target="blank" >
              RESUME
            </a>
          </div>
        </div>
        <div id="home" className="home flex justify-center">
          <h1
            style={{
              position: "absolute",
              top: "100px",
              color: "#adbbc8",
              fontFamily: "Courier",
            }}
          >
            Welcome to my portfolio
          </h1>
          <div className="home-about flex">
            <div className="my-object">
              <p>
                <span style={{ color: "#5656ba", fontWeight: "bolder" }}>
                  const{" "}
                </span>
                fullStackDeveloper =
                <span className="bracets" style={{ top: "3px" }}>
                  {p1}
                </span>
              </p>
              <p>
                <span style={{ color: "#09d5f0" }}>name: </span>Arik Einav,
              </p>
              <p>
                <span style={{ color: "#09d5f0" }}>profession: </span>Full Stack
                Developer
              </p>
              <p className="bracets">{p5}</p>
            </div>
            <div className="avatar">
              <Avatar
                src={require("../styles/images/me.png")}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="projects" id="Projects">
          <div style={{ height: "80px" }}></div>
          <List projects={this.state.projects} />
        </div>
        <div className="tech" id="tech">
          <div style={{ height: "80px" }}></div>
          <h1>STACKS</h1>
          <div
            style={{
              backgroundColor: "orange",
              width: "300px",
              height: "2px",
              margin: "auto",
            }}
          ></div>
          <Stacks />
        </div>
        <div style={{ height: "80px" }}></div>
        <h1 style={{ color: "white" }}>ABOUT</h1>
        <div
          style={{
            backgroundColor: "orange",
            width: "300px",
            height: "2px",
            margin: "auto",
          }}
        ></div>
        <About />
        <Contact />
        <footer
          className="flex justify-center"
          style={{ height: "55px", color: "white", background: "black" }}
        >
          <AiOutlineCopyright
            style={{ marginRight: "5px", alignSelf: "center" }}
          />
          <p
            className="fotter"
            style={{
              padding: "0",
              fontFamily: "Courier",
              margin: "0",
              alignSelf: "center",
            }}
          >
            All rights reserved Arik Einav
          </p>
        </footer>
        <a
          href="https://api.whatsapp.com/send?phone=972545311920"
          className="whatsup"
          target="blank"
        >
          <FaWhatsappSquare />
        </a>
      </div>
    );
  }
}
