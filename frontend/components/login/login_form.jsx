import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showErrors = this.showErrors.bind(this);
    this.guest = this.guest.bind(this);
  }

  update(field) {
    return (e) => {
      return this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  showErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`${i}`} className={`sif-error ${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // showErrors() {
  // const errors = {};
  // this.props.errors.forEach((error) => {
  //   errors[error.split(" ")[0].toLowerCase()] = error;
  // });
  // }

  guest(e) {
    this.setState({ username: "Guest", password: "misterhiro" });
    this.props.login(this.state);
  }

  componentWillUnmount() {
    const errors = [];
    this.props.clearErrors(errors);
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="sif-page">
        <header className="auth-header">
          <div className="auth-header-logo">
            <img src={window.logo} />
          </div>
        </header>
        <div className="sif-box">
          <h2 className="sif-title">Log in</h2>
          <div className="sif-divider"></div>

          <form onSubmit={this.handleSubmit} className="sif">
            <div>
              <label htmlFor="sif-username">Username / email</label>
              <input
                className="sif-username"
                type="text"
                value={username}
                onChange={this.update("username")}
              />
            </div>
            <span className="errormsg">{this.showErrors()}</span>
            <br />
            <div>
              <label htmlFor="sif-password">Password</label>
              <input
                className="sif-password"
                type="password"
                value={password}
                onChange={this.update("password")}
              />
            </div>
            <br />
            <div>
              <input type="submit" className="sif-submit" value="Log in" />
            </div>
            <div>
              <button className="sif-guest-login" onClick={this.guest}>
                Guest login
              </button>
            </div>
          </form>
          <span className="sif-link-signup">
            Don’t have an account? Sign up as&nbsp;
            <Link to="/signup">an artist</Link>.
          </span>
        </div>
      </div>
    );
  }
}

export default LoginForm;
