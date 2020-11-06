import React, { Component } from "react";
import { List } from "../cmps/List";
import { About } from "../pages/About";
// import { Navbar } from './cmps/Navbar'
import Sky from 'react-sky';
import react from '../styles/images/react.png'
import html from '../styles/images/html.png'
import sass from '../styles/images/sass.png'
import {Contact} from '../cmps/Contact'



export class Home extends Component {
  state = {
    projects: [
      { name: "TASKIT", desc: "A Full Stack Web Developer, passionate about solving challenges, with experience in writing single-page-applications using the latest WEB technologies.", date: "14/07/2020",imgUrlName:'taskit',url:'https://arikeinav.github.io/Meme-Generator/' },
      { name: "MEME", desc: "A Full Stack Web Developer, passionate about solving challenges, with experience in writing single-page-applications using the latest WEB technologies", date: "30/07/2020",imgUrlName:'meme',url:'https://arikeinav.github.io/Meme-Generator/'},
      { name: "MINESWIPER", desc: "A Full Stack Web Developer, passionate about solving challenges, with experience in writing single-page-applications using the latest WEB technologies.", date: "14/07/2020",imgUrlName:'mines',url:'https://arikeinav.github.io/Minesweeper/' },
      // { name: "Email-App", desc: "nice game", date: "14/07/2020",imgUrl:'../styles/images/mail.PNG' },
    ],
  };

  render() {
    const p1 = "{"
    const p5 = "}"
    return (
        
      <div className="main-app" style={{position:'relative',maxHeight:'17000px'}}>
                <Sky
    images={{
      
      0: react,  
     1: html,  
     2:sass
    
    }}
    how={600} 
    time={100}
    size={'13px'} 
    background={'#2c2929'} 
    
    
    
  />
          

        <div className="navbar">
          <div className="nav-tag flex align-center space-between">
            <a href="#home">HOME</a>
            <a href="#Projects">PROJECTS</a>
            <a href="#tech">STACKS</a>
            <a href="#about">ABOUT</a>
            <a href="https://docdro.id/dPkKK9b" target="blank">RESUME</a>
          </div>
        </div>
        <div id="home" className="home flex justify-center"> 
     <h1 style={{position:'absolute',top:'100px',color:'white'}}>Welcome to my portfolyo</h1>
      <div className="home-about flex">
      <div className="my-object">
  <p><span style={{color: '#5656ba',fontWeight: 'bolder'}}>const </span>fullStackDeveloper =<span className="bracets" style={{top: '3px'}}>{p1}</span></p>
  <p><span style={{color:'#09d5f0'}}>name: </span>Arik Einav,</p>
       <p><span style={{color:'#09d5f0'}}>age: </span>39,</p>
       <p><span style={{color:'#09d5f0'}}>professione: </span>Full Stack Developer</p>
       <p className="bracets" >{p5}</p>
       </div>
      
       <img src={require("../styles/images/me.png")} alt="" />
      </div>
      {/* <a id="section02" href="#Projects"><span></span> PROJECTS</a> */}
      </div>
      <div className="projects" id="Projects">
        <div style={{height:'80px'}}></div>
          <List projects={this.state.projects} />
          </div>
       
      
        <div className="tech" id="tech" >
  <div style={{height:'80px'}}></div>
 
          <h1>STACKS</h1>
        <div style={{backgroundColor:'orange',width:'300px',height:'2px',margin:'auto'}}></div>
          <div className="tech-list grid" >

            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(3, 194, 241, 0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/react.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>React.js</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(233, 62, 48, 0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/html.png")}
                    alt=""
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Html-5</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(190, 96, 139, 0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/sass.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Sass</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(63, 185, 132,0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/vue.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Vue</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(247, 224, 24,0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/js.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Js</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(128, 189, 2,0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/node.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Node.js</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(85, 60, 123,0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/bootstrap.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Bootstrap</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(69, 165, 57,0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/mongo.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Mongo.DB</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(115, 72, 177,0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/redux.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Redux</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(27, 135, 199,0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/css.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Css-3</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0,0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/socket.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Socket.io</h1>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner" style={{boxShadow:'0 4px 8px 0 rgba(213, 0, 0,0.13)'}}>
                <div className="flip-card-front">
                  <img
                    className="tech-img"
                    src={require("../styles/images/npm.png")}
                    alt="Avatar"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>NPM</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:'80px'}}></div>
        <h1 style={{color:'white'}}>ABOUT</h1>
       
       <div style={{backgroundColor:'orange',width:'300px',height:'2px',margin:'auto'}}></div>
          <div id="about" className="about flex space-between align-center">
          <img src={require("../styles/images/me.png")} alt="" style={{height:'200px',marginTop:'0'}} />
          <About  />
          <Contact/>
        </div>
        
      <footer><div style={{height:'100px'}}></div></footer>
        
      </div>
    );
  }
}
