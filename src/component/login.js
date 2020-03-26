import React from "react";
import loginImg from "./cheflogin.png";
import { Link } from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="images">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to='/Home' type="button" className="btn">
            Login
          </Link>
        </div>
      </div>
      
    );
  }
}
