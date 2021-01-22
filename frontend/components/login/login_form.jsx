import React from "react";

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
    this.setState({ username: "Guest", password: "starwars" });
    this.props.login(this.state);
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="sif-page">
        <div className="sif-box">
          <h2 className="sif-title">Log in</h2>
          {this.showErrors()}
          <div className="sif-divider"></div>

          <form onSubmit={this.handleSubmit} className="sif">
            <div>
              <label htmlFor="sif-username">Username</label>
              <input
                className="sif-username"
                type="text"
                value={username}
                onChange={this.update("username")}
              />
            </div>
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
              <input type="submit" className="sif-submit" value="Sign in" />
            </div>
            <div>
              <button className="sif-guest-login" onClick={this.guest}>
                Guest login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
