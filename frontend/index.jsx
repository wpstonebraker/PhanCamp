import React from "react";
import ReactDOM from "react-dom";
import { deleteSession, postSession, postUser } from "./util/session_api_util";
import configureStore from "./store/store";
import { login } from "./actions/session_actions";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // testing start
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  window.login = login;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // testing end

  ReactDOM.render(<Root store={store} />, root);
});
