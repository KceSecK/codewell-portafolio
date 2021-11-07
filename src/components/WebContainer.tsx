import React from "react";
import Webs from "../components/Webs";
import spense from "../assets/img/Spense.png";
import yelp from "../assets/img/YelpCamp.png";
        
function WebContainer() {
  return (
    <div className="container">
      <div className="row">
        <Webs src={spense} title={"Spense.com"}>
          Rethinking the way writers get paid, an open-source platform designed
          to help writers focus more on writing, and less on when and how
          they'll get paid. Project in collaboration with Codewell.cc
        </Webs>
        <Webs src={yelp} title={"YelpCamp.com"}>
          Allowing backpack travelers to perfectly plan their trup through an
          open-source platform similar to TripAdvisor. With over 1m MAU,
          YelpCamp has been the crowd's favorite in 2021.
        </Webs>
      </div>
    </div>
  );
}

export default WebContainer;
