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
            <i class="devicon-amazonwebservices-plain-wordmark"></i>
            <i class="devicon-css3-plain"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-jquery-plain-wordmark"></i>
            <i class="devicon-postgresql-plain-wordmark"></i>
            <i class="devicon-rails-plain-wordmark"></i>
            <i class="devicon-react-original-wordmark"></i>
            <i class="devicon-redux-original"></i>
            <i class="devicon-ruby-plain"></i>
            <i class="devicon-ubuntu-plain-wordmark"></i>
          </div>
          <div id="footer-right">
            <a href="https://github.com/wpstonebraker">
              <i class="devicon-github-original-wordmark"></i>
            </a>
            <a href="https://www.linkedin.com/in/paul-stonebraker/">
              <i class="devicon-linkedin-plain"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foots;
