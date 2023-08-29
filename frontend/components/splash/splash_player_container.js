import { connect } from "react-redux";
import SplashPlayer from "./splash_player";
import { withRouter } from "../../util/with_router_util";

const mSTP = (state, ownProps) => {
  const test = Object.values(state.entities.albums).filter((album) => {
    return album.title === "Dr. Zack's Picks Vol. 1";
  })[0];
  if (state.entities.audio.albumId) {
    return {
      track: state.entities.audio,
      artist:
        state.entities.artists[
          state.entities.albums[state.entities.audio.albumId].artistId
        ],
      album: state.entities.albums[state.entities.audio.albumId],
      photo: state.entities.albums[state.entities.audio.albumId].photoUrl,
    };
    // } else if (Object.values(state.entities.albums)[0] !== undefined) {
    //   return {
    //     audio: state.entities.audio,
    //     track:
    //       state.entities.tracks[
    //         Object.values(state.entities.albums)[0].trackIds[0]
    //       ],
    //     album: Object.values(state.entities.albums)[0],
    //     artist:
    //       state.entities.artists[
    //         state.entities.albums[
    //           state.entities.tracks[
    //             Object.values(state.entities.albums)[0].trackIds[0]
    //           ].albumId
    //         ].artistId
    //       ],
    //   };
    //prod
    // } else if (state.entities.albums[33]) {
    //   return {
    //     album: state.entities.albums[33],
    //     track: state.entities.tracks[state.entities.albums[33].trackIds[0]],
    //     artist: state.entities.artists[27],
    //   };
    //dev
  } else if (
    // Object.values(state.entities.albums).filter((album) => {
    //   return album.title === "Dr. Zack's Picks Vol. 1";
    // })[0]
    // test !== undefined
    test !== undefined &&
    state.entities.tracks[test.trackIds[0]]
  ) {
    const init = Object.values(state.entities.albums).filter((album) => {
      return album.title === "Dr. Zack's Picks Vol. 1";
    })[0];
    return {
      album: init,
      track: state.entities.tracks[init.trackIds[0]],
      artist: state.entities.artists[init.artistId],
    };
  } else {
    return {
      track: state.entities.audio,
    };
  }
};

const mDTP = (dispatch) => {
  return {};
};

export default withRouter(connect(mSTP, mDTP)(SplashPlayer));
