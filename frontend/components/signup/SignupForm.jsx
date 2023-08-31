import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

const createUser = async (userData) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: userData }),
  });

  if (!response.ok) {
    throw new Error("An error occurred while creating the user");
  }

  return response.json();
};

const SignupForm = (props) => {
  const [artistName, setArtistName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signupMutation = useMutation(createUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const localArtistName = artistName;
    const localUsername = username;
    const localPassword = password;
    const localEmail = email;

    const formData = {
      artist_name: localArtistName,
      username: localUsername,
      password: localPassword,
      email: localEmail,
    };
    try {
      await signupMutation.mutateAsync(formData);
    } catch (error) {}
  };
  useEffect(() => {
    const errors = [];
    // props.clearErrors(errors);
  }, []);

  const errors = {};
  //   props.errors.forEach((error) => {
  //     errors[error.split(" ")[0].toLowerCase()] = error;
  //   });

  return (
    <div className="suf-page">
      <header className="auth-header">
        <div className="auth-header-logo">
          <Link to="/">
            <img src={window.logo} />
          </Link>
        </div>
      </header>
      <div className="suf-box">
        <h2 className="suf-title">Sign Up for an Artist Account</h2>
        <div className="suf-divider"></div>
        <form onSubmit={handleSubmit} className="suf">
          <div className="suf-artist-name-div">
            <label htmlFor="suf-artist-name">Artist/Band name</label>
            <input
              className={`suf-artist-name ${
                errors.artist ? "error-outline" : ""
              }`}
              type="text"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              id="suf-artist_name"
            />
          </div>
          <span className="errormsg" id="error-artist_name">
            {errors.artist}
          </span>

          <br />
          <div>
            <label htmlFor="suf-username">Username</label>
            <input
              className={`suf-username ${
                errors.username ? "error-outline" : ""
              }`}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="suf-username"
            />
          </div>
          <span className="errormsg" id="error-username">
            {errors.username}
          </span>
          <br />
          <div>
            <label htmlFor="suf-password">Password</label>
            <input
              className={`suf-password ${
                errors.password ? "error-outline" : ""
              }`}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="suf-password"
            />
          </div>
          <span className="errormsg" id="error-password">
            {errors.password}
          </span>
          <br />
          <div>
            <label htmlFor="suf-email">Email</label>
            <input
              className={`suf-email ${errors.email ? "error-outline" : ""}`}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="suf-email"
            />
          </div>
          <span className="errormsg" id="error-email">
            {errors.email}
          </span>
          <br />
          <div>
            <input type="submit" className="suf-submit" value="Sign up" />
          </div>
        </form>
        <span className="sif-link-signup">
          Already have an account?&nbsp;
          <Link to="/login">Log in</Link>.
        </span>
      </div>
    </div>
  );
};

export default SignupForm;
