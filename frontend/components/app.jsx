import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./signup/signup_form_container";
import LoginFormContainer from "./login/login_form_container";
import { Routes, Route, Switch } from "react-router-dom";
import { AuthRoutes, ProtectedRoutes } from "../util/route_util";
import BannerBarContainer from "./banner_bar/banner_bar_container";
import Splash from "./splash/splash";
import AlbumCreateFormContainer from "./album/album_create_form_container";
import PhishAlbumCreateFormContainer from "./album/phish_album_create_form_container";
import ProfileContainer from "./profile/profile_container";
import SplashContainer from "./splash/splash_container";
import ArtistsDetails from "./Artists/ArtistsDetails";
import AlbumDetails from "./Artists/Albums/AlbumDetails";
import { ArtistLayout } from "./Artists/ArtistLayout";
import Landing from "./Landing/Landing";
import SearchDisplay from "./search/SearchDisplay";
import SignupForm from "./signup/SignupForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginFormContainer />} />
        </Route>
        <Route element={<BannerBarContainer />}>
          <Route path="/" element={<Landing />} />
          <Route path="/albums/create" element={<AlbumCreateFormContainer />} />
          <Route
            path="/albums/addPhish"
            element={<PhishAlbumCreateFormContainer />}
          />
          <Route path="/edit-profile" element={<ProfileContainer />} />
          <Route path="/search" element={<SearchDisplay />} />
          <Route path="/artists" element={<ArtistLayout />}>
            <Route path=":id" element={<ArtistsDetails />} />
            <Route path=":id/albums/:id" element={<AlbumDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignupFormContainer />} />
        <Route path="/login" element={<LoginFormContainer />} />
        <Route path="/" element={<BannerBarContainer />} />
      </Routes>
      <Routes>
        <Route path="/" element={<SplashContainer />} />
        <Route path="/albums/create" element={<AlbumCreateFormContainer />} />
        <Route
          path="/albums/addPhish"
          element={<PhishAlbumCreateFormContainer />}
        />
        <Route path="/edit-profile" element={<profile_container />} />
        <Route path="/search" element={<SearchDisplayContainer />} />
        <Route path="/artists/:id" element={<ArtistsDetails />} />
      </Routes>
    </div>
  );
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashContainer />} />
      </Routes>
    </div>
  );
  return (
    <div>
      <Routes>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <BannerBarContainer />
      </Routes>
      <Routes>
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
        <Route path="/search" component={SearchDisplayContainer} />
        <Route path="/artists/:id" component={ArtistShowContainer} />

        <Route exact path="/" component={SplashContainer} />
      </Routes>
      <Foots />
    </div>
  );
};

export default App;
