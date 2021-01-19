import React from "react";
import ReactDOM from "react-dom";
import { deleteSession, postSession, postUser } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // testing start
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  // testing end

  ReactDOM.render(<h1>Something</h1>, root);
});
