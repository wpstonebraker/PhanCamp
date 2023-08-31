import React from "react";

const Foots = (props) => {
  return (
    <div id="footer-outer">
      <div id="footer-inner">
        <div id="footer-box">
          {/* <div id="footer-personal-box">
            <span id="footer-personal">
              visit my website at www.paulstonebraker.com
            </span>
          </div> */}
          <div id="footer-top">
            <a href="https://github.com/wpstonebraker" target="_blank">
              <i className="devicon-github-original-wordmark"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/paul-stonebraker/"
              target="_blank"
            >
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href="https://angel.co/u/paul-stonebraker" target="_blank">
              <i className="fab fa-angellist"></i>
            </a>
          </div>
          <span id="footer-credits">
            This site was made with love by{" "}
            <a
              href="https://www.paulstonebraker.com"
              target="_blank"
              id="personal-link"
            >
              Paul Stonebraker
            </a>
            , using these technologies:
          </span>
          <div id="footer-bottom-box">
            <div id="footer-tech-label"></div>
            <div id="footer-bottom">
              <i className="devicon-amazonwebservices-plain-wordmark"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-jquery-plain-wordmark"></i>
              <i className="devicon-postgresql-plain-wordmark"></i>
              <i className="devicon-rails-plain-wordmark"></i>
              <i className="devicon-react-original-wordmark"></i>
              <i className="devicon-redux-original"></i>
              <i className="devicon-ruby-plain"></i>
              <i className="devicon-ubuntu-plain-wordmark"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foots;
