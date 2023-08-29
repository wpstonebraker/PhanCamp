import React from "react";
import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";
import App from "./app";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const Root = ({ store }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </QueryClientProvider>
  );
};

export default Root;
