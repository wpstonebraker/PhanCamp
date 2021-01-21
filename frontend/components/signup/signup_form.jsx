import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist_name: "",
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
    const { artist_name, username, password, email } = this.state;
    return (
      <div className="suf">
        <h2>Sign Up for an Artist Account</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="suf-artist-name">Artist/Band name</label>
            <input
              className="suf-artist-name"
              type="text"
              value={artist_name}
              onChange={this.update("artist_name")}
            />
          </div>
          <br />
          <div>
            <label htmlFor="suf-username">Username</label>
            <input
              className="suf-username"
              type="text"
              value={username}
              onChange={this.update("username")}
            />
          </div>
          <br />
          <div>
            <label htmlFor="suf-password">Password</label>
            <input
              className="suf-password"
              type="password"
              value={password}
              onChange={this.update("password")}
            />
          </div>
          <br />
          <div>
            <label htmlFor="suf-email">Email</label>
            <input
              className="suf-email"
              type="text"
              value={email}
              onChange={this.update("email")}
            />
          </div>
          <br />
          <div>
            <input type="submit" className="suf-submit" value="Sign up" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
