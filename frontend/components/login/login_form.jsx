import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    const { username, password } = this.state;
    return (
      <div className="sif">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="sif-username">Username</label>
          <input
            className="sif-username"
            type="text"
            value={username}
            onChange={this.update("username")}
          />
          <br />
          <label htmlFor="sif-password">Password</label>
          <input
            className="sif-password"
            type="password"
            value={password}
            onChange={this.update("password")}
          />
          <br />
          <input type="submit" className="suf-submit" value="Sign in" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
