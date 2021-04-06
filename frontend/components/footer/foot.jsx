import React from "react";

const Foots = (props) => {
  return (
    <div id="footer-outer">
      <div id="footer-inner">
        <div id="footer-personal">
          visit my website at www.paulstonebraker.com
        </div>
        <div id="footer-box">
          <div id="footer-left">
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
          <div id="footer-right">
            <a href="https://github.com/wpstonebraker" target="_blank">
              <i className="devicon-github-original-wordmark"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/paul-stonebraker/"
              target="_blank"
            >
              <i className="devicon-linkedin-plain"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foots;
