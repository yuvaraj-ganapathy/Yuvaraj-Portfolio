import React from "react";
import "./Terminal.css";

function Terminal() {
  return (
    <div className="terminal-container">
      <div className="terminal_toolbar">
        <div className="butt">
          <button className="btn btn-color"></button>
          <button className="btn"></button>
          <button className="btn"></button>
        </div>
        <p className="user">yuvaraj76@admin: ~</p>
        <div className="add_tab">+</div>
      </div>
      <div className="terminal_body">
        <div className="terminal_prompt">
          <span className="terminal_user">yuvaraj76@admin:</span>
          <span className="terminal_location">~</span>
          <span className="terminal_bling">$</span>
          <span className="terminal_cursor"></span>
        </div>
        <div className="terminal_output">
          {/* <p className="hacker-text">Welcome to my Portfolio!</p> */}
            <p className="hacker-text myname">I'm <span className="lime">YUVARAJ G</span></p>
            <p className="hacker-text">
               Web Developer 
            </p>
            <p className="hacker-text">
              Pursuing Btech at KL University 
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/u1__yuvi/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <box-icon type="logo" name="instagram" color="limegreen"></box-icon>
              </a>
              <a
                href="https://www.linkedin.com/in/yuvaraj76/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <box-icon name="linkedin-square" type="logo" color="limegreen"></box-icon>
              </a>
              <a
                href="https://github.com/yuvaraj-ganapathy/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <box-icon name="github" type="logo" color="limegreen"></box-icon>
              </a>
            </div> 
        </div>
        <div className="terminal_input">
          <input
            placeholder="Type a command..."
            className="input_text"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
