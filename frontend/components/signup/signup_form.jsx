import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: "",
      username: "",
      password: "",
      email: "",
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
    this.props.signup(this.state);
  }

  render() {
    const { artistName, username, password, email } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="suf-artist-name">Artist/Band name</label>
          <input
            className="suf-artist-name"
            type="text"
            value={artistName}
            onChange={this.update("artistName")}
          />
          <br />
          <label htmlFor="suf-username">Username</label>
          <input
            className="suf-username"
            type="text"
            value={username}
            onChange={this.update("username")}
          />
          <br />
          <label htmlFor="suf-password">Password</label>
          <input
            className="suf-password"
            type="password"
            value={password}
            onChange={this.update("password")}
          />
          <br />
          <label htmlFor="suf-email">Email</label>
          <input
            className="suf-email"
            type="text"
            value={email}
            onChange={this.update("email")}
          />
          <br />
          <input type="submit" className="suf-submit" value="Sign up" />
        </form>
      </div>
    );
  }
}

export default SignupForm;
