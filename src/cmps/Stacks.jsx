
import React from 'react'
export function Stacks (){

    return(
        <div className="tech-list grid">
        <div className="flip-card">
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(3, 194, 241, 0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(233, 62, 48, 0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(190, 96, 139, 0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(63, 185, 132,0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(247, 224, 24,0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(128, 189, 2,0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(85, 60, 123,0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(69, 165, 57,0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(115, 72, 177,0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(27, 135, 199,0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0,0.13)" }}
          >
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
          <div
            className="flip-card-inner"
            style={{ boxShadow: "0 4px 8px 0 rgba(213, 0, 0,0.13)" }}
          >
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
    )
}