import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./signup/signup_form_container";
import LoginFormContainer from "./login/login_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import BannerBarContainer from "./banner_bar/banner_bar_container";
import FeatureIndexContainer from "./feature/feature_index_container";
import ArtistShowContainer from "./artist/artist_show_container";
import AlbumShowContainer from "./album/album_show_container";
import Splash from "./splash/splash";
import AlbumCreateFormContainer from "./album/album_create_form_container";
import PhishAlbumCreateFormContainer from "./album/phish_album_create_form_container";
import profile_container from "./profile/profile_container";

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <BannerBarContainer />
      </Switch>
      <Switch>
        <ProtectedRoute
          exact
          path="/albums/create"
          component={AlbumCreateFormContainer}
        />
        <ProtectedRoute
          exact
          path="/albums/addPhish"
          component={PhishAlbumCreateFormContainer}
        />
        <ProtectedRoute
          exact
          path="/edit-profile"
          component={profile_container}
        />
        <Route path="/artists/:id" component={ArtistShowContainer} />

        <Route exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
