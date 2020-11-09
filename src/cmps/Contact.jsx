import React ,{Component} from 'react';
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import { init } from "emailjs-com";
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai"
import {BiPhone} from "react-icons/bi"
import {FiMail} from "react-icons/fi"


init("user_DwELl4XwTINN7NjVkso43");

export class Contact extends Component {
  state = {
      name: "",
      email: "",
      msg:"",
      userMsg:""
    
  };
  handleChange = (ev) => {
    this.setState({userMsg:""})
    const { name, value } = ev.target;
    this.setState((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    
  };


  sendEmail= async (e)=> {
    e.preventDefault();
    const { email ,msg } = this.state
    if (!email || !msg) {
      return this.setState({ userMsg: "Please enter email/Messege" });
    }
    await emailjs
      .sendForm(
        "service_sn03wmr",
        "template_2acjgim",
        e.target,
        "user_DwELl4XwTINN7NjVkso43"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
       
      )
      this.setState({name: "", email: "", msg:"",userMsg:""})
  }

render (){
  return (
      <div className="contact flex space-around" >
        <div className="social flex column space-around align-start">
      <div className="flex align-center" style={{color:'white', fontSize:'18px'}}> <BiPhone style={{marginRight:'8px'}}/>+972-545-311-920</div>
      <div className="flex align-center" style={{color:'white', fontSize:'18px'}}> <FiMail style={{marginRight:'8px'}}/>arikeinav@gmail.com</div>
          <a href="https://github.com/arikeinav" target="blank" className="flex align-center " style={{color:"white", fontSize:'25px',cursor:"pointer"}}><AiFillGithub style={{color:'white', fontSize:'25px',marginRight:'8px'}}/> <span>
          Github</span></a>
          <a href="https://www.linkedin.com/in/arik-einav/" target="blank" className="flex align-center " style={{color:'rgb(10, 102, 194)', fontSize:'25px',cursor:"pointer"}}><AiFillLinkedin style={{color:'rgb(10, 102, 194)', fontSize:'25px',marginRight:'8px'}}/> <span> Linkedin</span></a>
          
          </div>
          
    <form
      className="contact-form"
      onSubmit={this.sendEmail}
    >
        <h1>Contact me</h1>
        {this.state.userMsg &&<div className="error-msg"> <h5>{this.state.userMsg}</h5></div>} 
      <input type="hidden" name="contact_number" />

      <TextField
        id="outlined-secondary"
        label="Your name"
        variant="outlined"
        name="name"
        className="input"
        value={this.state.name}
        onChange={this.handleChange}
        
      />
      <TextField
        id="outlined-secondary"
        label="Email"
        variant="outlined"
        name="email"
        className="input"
        value={this.state.email}
        onChange={this.handleChange}
      />

      <TextField
        id="outlined-multiline-static"
        label="Messege"
        multiline
        rows={4}
        variant="outlined"
        name="msg"
        className="text"
        value={this.state.msg}
        onChange={this.handleChange}
      />
      <input className="contact-btn" type="submit" id="btnsubmit"
      
      value="Send" />
    </form>
    </div>
  );
}
}

