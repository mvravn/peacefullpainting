import React, { Component } from "react";

import WorksInProgress from "./WorksInProgress";
import wip_list from "./wip_list.json";

import SquigCarousel from "./SquigCarousel";
import squigs_list from "./squigs_list.json";

/* Tidligere er repo kaldet mvravn-github.io, ændret til peacefullpainting nu */

class Home extends Component {
  state = {
    wip: wip_list.images,
    squigs: squigs_list.images
  };

  render() {
    window.$(document).ready(function() {
      window.$(".parallax").parallax();
    });

    window.$(document).ready(function() {
      window.$(".slider").slider();
    });

    window.$(document).ready(function() {
      window.$(".carousel").carousel();
    });

    return (
      <div>
        <div className="slider z-depth-1" id="banner">
          <ul className="slides">
            <li>
              <img
                src={
                  window.location.origin +
                  "/images/non-gallery/paint_station_dark.jpg"
                }
                alt="paint station"
              />
              <div className="caption center-align">
                <h1 className="light grey-text text-lighten-3 standout">
                  Peaceful Painting
                </h1>
                <br />
                <h5 className="light grey-text text-lighten-3 standout">
                  Painting miniatures in peace, getting them ready for WAR!
                </h5>
              </div>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 l8 offset-l2">
                <br />
                <br />
                <p className="diamond center-align blue-grey-text text-darken-3">
                  &#9672;
                </p>
                <br />
                <p className="flow-text">
                  Peacefull Painting is a small painting studio, in love with
                  painting miniatures and chilling. You can buy my own projects
                  - mainly Warhammer - or you can hire me for a commission.
                </p>
                <p className="flow-text">
                  Peacefull Painting is an after hours hobby, so you don't have
                  to worry if the studio is still around next month or if
                  someone is asking living-wages for what you have in mind.
                </p>
                <p className="flow-text">
                  If in doubt, feel free to drop me an e-mail.
                </p>
                <br />
                <p className="diamond center-align blue-grey-text text-darken-3">
                  &#9672;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <SquigCarousel images={this.state.squigs} />
          </div>
        </div>
        {/*<div className="section hide-on-med-and-down">
                    <div className="row">
                    <SquigCarousel images={this.state.squigs}/>
                        <div className="parallax-container">
                            <div className="parallax">
                                <img src={window.location.origin + '/images/non-gallery/paint_station_2.jpg'} alt="paint_station_alt"/>
                            </div>
                        </div>
                    </div>
                </div>*/}
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12">
                <h2 className="center">How Commissions Works</h2>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="row">
              <div className="col s12 l3">
                <img
                  className="responsive-img z-depth-2"
                  src={
                    window.location.origin +
                    "/images/non-gallery/Vermin_Lord_Corruptor_wip_1.jpg"
                  }
                  alt="Lord Corruptor Head"
                />
              </div>
              <div className="col s12 l8 push-l1">
                <h3>1 - You somehow got an idea into your skull?</h3>
                <p className="flow-text">
                  You know that frustrated feeling when you have a great idea,
                  but you know you just won't get it done? Perhaps it is time
                  you lack or just the skills and patience. Or maybe you know
                  you will never get it done, because you're simply too much of
                  a perfectionist?
                </p>
                <p className="flow-text">
                  Don't get annoyed, just get a hold of Peacfull Painting.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="row">
              <div className="col s12 l3 push-l9">
                <div>
                  <img
                    className="responsive-img z-depth-2"
                    src={
                      window.location.origin +
                      "/images/non-gallery/Vermin_Lord_Corruptor_wip_2.jpg"
                    }
                    alt="Lord Corruptor Body"
                  />
                </div>
              </div>
              <div className="col s12 l8 pull-l3">
                <h3>2 - Flesh out your idea</h3>
                <p className="flow-text">
                  Maybe find an example or two you can reference and write down
                  your thoughts. Just remember that a picture speaks a thousand
                  words.{" "}
                </p>
                <p className="flow-text">
                  Simply send me an email, and we'll make sure we understand
                  each other.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="row">
              <div className="col s12">
                <h3 className="center">
                  3 - Watch your idea become reality...
                </h3>
                <p className="flow-text center">
                  ... and put it on the board, ready for war!
                </p>
                <br />
                <p className="diamond center-align blue-grey-text text-darken-3">
                  &#9672;
                </p>
                <br />
              </div>
              <div className="col s12 l6 push-l3">
                <img
                  className="responsive-img z-depth-2"
                  src={
                    window.location.origin +
                    "/images/non-gallery/Vermin_Lord_Corruptor_1.jpg"
                  }
                  alt="Vermin Lord Corruptor in all his glory!"
                />
                <br />
                <br />
                <br />
                <p className="diamond center-align blue-grey-text text-darken-3">
                  &#9672;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
