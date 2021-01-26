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
    // this.showErrors = this.showErrors.bind(this);
    this.guest = this.guest.bind(this);
  }

  update(field) {
    return (e) => {
      document.getElementById(`sif-${field}`).classList.remove("error-outline");
      // document.getElementById(`error-${field}`).classList.add("hide-error");
      return this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const errors = ["Username cannot be blank", "Password cannot be blank"];
    if (this.state.password === "" && this.state.username === "") {
      this.props.sendErrors(errors);
    } else if (this.state.password === "") {
      this.props.sendErrors([errors[1]]);
    } else if (this.state.username === "") {
      this.props.sendErrors([errors[0]]);
    } else {
      this.props.login(this.state);
    }
  }

  // showErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`${i}`} className={`sif-error ${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  // showErrors() {
  // const errors = {};
  // this.props.errors.forEach((error) => {
  //   errors[error.split(" ")[0].toLowerCase()] = error;
  // });
  // }

  guest(e) {
    e.preventDefault();
    this.setState({ username: "Guest", password: "misterhiro" });
    // this.props.login(this.state);
    this.props.demoLogin();
  }

  componentWillUnmount() {
    const errors = [];
    this.props.clearErrors(errors);
  }

  render() {
    const { username, password } = this.state;
    const errors = {};
    this.props.errors.forEach((error) => {
      errors[error.split(" ")[0].toLowerCase()] = error;
    });
    return (
      <div className="sif-page">
        <header className="auth-header">
          <div className="auth-header-logo">
            <Link to="/">
              <img src={window.logo} />
            </Link>
          </div>
        </header>
        <div className="sif-box">
          <h2 className="sif-title">Log in</h2>
          <div className="sif-divider"></div>

          <form className="sif">
            <div>
              <label htmlFor="sif-username">Username / email</label>
              <input
                className={`sif-username ${
                  errors.username ? "error-outline" : ""
                }`}
                type="text"
                value={username}
                onChange={this.update("username")}
                id="sif-username"
              />
            </div>
            <span className="errormsg" id="error-username">
              {errors.username}
            </span>
            <br />
            <div>
              <label htmlFor="sif-password">Password</label>
              <input
                className={`sif-password ${
                  errors.password ? "error-outline" : ""
                }`}
                type="password"
                value={password}
                onChange={this.update("password")}
                id="sif-password"
              />
            </div>
            <span className="errormsg" id="error-password">
              {errors.password}
            </span>
            <span className="errormsg">{errors.invalid}</span>

            <br />
            <div>
              <input
                type="submit"
                className="sif-submit"
                value="Log in"
                onClick={this.handleSubmit}
              />
            </div>
            <div>
              <input
                type="button"
                className="sif-guest-login"
                value="Demo login"
                onClick={this.guest}
              />
            </div>
            {/* <div>
              <button className="sif-guest-login" onClick={this.guest}>
                Guest login
              </button>
            </div> */}
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
