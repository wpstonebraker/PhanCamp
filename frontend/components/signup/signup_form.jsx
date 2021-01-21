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
    this.showErrors = this.showErrors.bind(this);
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

  showErrors() {
    debugger;
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`${i}`} className={`suf-error ${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { artist_name, username, password, email } = this.state;
    return (
      <div className="suf-page">
        <div className="suf-box">
          <h2 className="suf-title">Sign Up for an Artist Account</h2>
          {this.showErrors()}
          <div className="suf-divider"></div>
          <form onSubmit={this.handleSubmit} className="suf">
            <div className="suf-artist-name-div">
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
            {/* <div>
              <button
                type="submit"
                className="suf-guest-demo"
                value="Demo Login"
              >
                Demo Login
              </button>
            </div> */}
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
