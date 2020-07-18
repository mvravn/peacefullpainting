import React from "react";

const About = () => {
  return (
    <div className="container" style={{ minHeight: "78vh" }}>
      <div className="row">
        <div className="col s12 l8 push-l2">
          <div className="section">
            <br />
            <h2 className="center">About Peaceful Painting Studio</h2>
            <br />
            <div className="section">
              <p>
                Peaceful Painting Studio is a one man studio located in
                Copenhagen, Denmark. It is both a hobby and a dream come true.
                The prices are moderate, but the passion is big and ever
                growing.
              </p>
              <p>
                You can hire me for commissions, or take a look in the gallery
                to see what's currently for sale and what I'm working on.
              </p>
              <p>If you have any questions, always feel free to e-mail me.</p>
              <p>
                Follow me on different social media and keep tabs on what I am
                engrossed in at the moment - links are in the footer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="section">
          <div className="col s12 l8 push-l2 center">
            <img
              src={
                window.location.origin + "/images/non-gallery/pplogo_transb.png"
              }
              alt="black peaceful painting studio logo"
            />
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="section">
          <div className="col s12 l8 push-l2 center">
            <img
              src={window.location.origin + "/images/non-gallery/collage.jpg"}
              alt="artist and some works"
              width="500px"
            />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
