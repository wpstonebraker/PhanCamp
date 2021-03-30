import React from "react";
import FeatureIndexContainer from "../feature/feature_index_container";
import SellingNowIndexContainer from "../selling_now/selling_now_index_container";
import DailyIndexContainer from "../daily/daily_index_container";
import Foots from "../footer/foot";

const Splash = (props) => {
  return (
    <div>
      <FeatureIndexContainer />
      <SellingNowIndexContainer />
      <DailyIndexContainer />
      <Foots />
    </div>
  );
};

export default Splash;
