import React, { Component } from "react";

class Pricing extends Component {
  render() {
    //You must use window.$ or $ will be undefined - SÅDAN INDSÆTTES JQUERY FUNKTIONALITETEN HVOR DEN SKAL BRUGES TIL MATERIALIZE
    window.$(document).ready(function () {
      // window.$(".tabs").tabs({ swipeable: true });
      window.$(".tabs").tabs();
    });
    window.$(document).ready(function () {
      window.$(".materialboxed").materialbox();
    });

    return (
      <div className="container">
        <div className="row">
          <div className="section">
            <br />
            <h2 className="center">Pricing Guidelines</h2>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col s12 l8 push-l2">
            <ul className="tabs">
              <li className="tab col s4">
                <a className="active black-text" href="#prices1">
                  Tabletop Standard
                </a>
              </li>
              <li className="tab col s4">
                <a className="black-text" href="#prices2">
                  Tabletop<span className="pricingPlus">+</span> Standard
                </a>
              </li>
              <li className="tab col s4">
                <a className="black-text" href="#prices3">
                  Display Standard
                </a>
              </li>
            </ul>
          </div>

          <div id="prices1" className="col s12 l8 push-l2">
            <div>
              <h5>Tabletop Standard</h5>
            </div>
            <div>
              <span>
                <div className="section">
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Troops</th>
                        <th>Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Small Infantry</td>
                        <td>&nbsp;&nbsp;35 kr.</td>
                      </tr>
                      <tr>
                        <td>Medium Infantry</td>
                        <td>&nbsp;&nbsp;40 kr.</td>
                      </tr>
                      <tr>
                        <td>Large Infantry</td>
                        <td>&nbsp;&nbsp;50 kr.</td>
                      </tr>
                      <tr>
                        <td>Biker/Cavalry</td>
                        <td>&nbsp;&nbsp;75 Kr.</td>
                      </tr>
                      <tr>
                        <td>Small tank/Beast</td>
                        <td>150 kr.</td>
                      </tr>
                      <tr>
                        <td>Large tank/Beast&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>225 kr.</td>
                      </tr>
                      <tr>
                        <td>Flyer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>400 kr.</td>
                      </tr>
                      <tr>
                        <td>Behemoth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>350 kr.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="section">
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Characters</th>
                        <th>Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>HQ/Hero (Small)</td>
                        <td>100 kr.</td>
                      </tr>
                      <tr>
                        <td>HQ/Hero (Mid-Size)</td>
                        <td>125 kr.</td>
                      </tr>
                      <tr>
                        <td>HQ/Hero (Large)</td>
                        <td>150 kr.</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="right note">
                    Peaceful Painting Studio · Last updated 16/3 2019
                    <br />
                    <br />
                    <br />
                  </p>

                  <div className="col s12">
                    <div className="card showcard">
                      <div className="card-stacked">
                        <div className="card-content">
                          <h4 className="center-align">Tabletop standard</h4>
                          <br />
                          <p>
                            With tabletop standard you will get models that look
                            great in a regiment.
                          </p>
                          <p>
                            Our studio will make sure you have a good looking
                            army, while keeping costs down at the same time.
                          </p>
                          <br />
                          <h6>Facts:</h6>
                          <ul>
                            <li>- Three different base colours.</li>
                            <li>- Base colours are shaded.</li>
                            <li>- Base colours are highlighted once.</li>
                            <li>- A good standard for armies.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-image">
                        <img
                          className="materialboxed pricingImage"
                          src={
                            window.location.origin +
                            "/images/non-gallery/TabletopEx.JPG"
                          }
                          alt="booh!"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </span>
            </div>
          </div>
          <div id="prices2" className="col s12 l8 push-l2">
            <div>
              <h5>
                Tabletop<span className="pricingPlus">+</span> Standard
              </h5>
            </div>
            <div>
              <span>
                <div className="section">
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Troops</th>
                        <th>Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Small Infantry</td>
                        <td>&nbsp;&nbsp;55 kr.</td>
                      </tr>
                      <tr>
                        <td>Medium Infantry</td>
                        <td>&nbsp;&nbsp;60 kr.</td>
                      </tr>
                      <tr>
                        <td>Large Infantry</td>
                        <td>&nbsp;&nbsp;70 kr.</td>
                      </tr>
                      <tr>
                        <td>Biker/Cavalry</td>
                        <td>120 Kr.</td>
                      </tr>
                      <tr>
                        <td>Small tank/Beast</td>
                        <td>270 kr.</td>
                      </tr>
                      <tr>
                        <td>Large tank/Beast&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>360 kr.</td>
                      </tr>
                      <tr>
                        <td>Flyer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>500 kr.</td>
                      </tr>
                      <tr>
                        <td>Behemoth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>550 kr.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="section">
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Characters</th>
                        <th>Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>HQ/Hero (Small)</td>
                        <td>170 kr.</td>
                      </tr>
                      <tr>
                        <td>HQ/Hero (Mid-Size)</td>
                        <td>190 kr.</td>
                      </tr>
                      <tr>
                        <td>HQ/Hero (Large)</td>
                        <td>210 kr.</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="right note">
                    Peaceful Painting Studio · Last updated 16/3 2019
                  </p>

                  <div className="col s12">
                    <div className="card showcard">
                      <div className="card-stacked">
                        <div className="card-content">
                          <h4 className="center-align">
                            Tabletop
                            <span className="pricingPlus">+</span> standard
                          </h4>
                          <br />
                          <p>
                            With tabletop+ standard, the level is better what
                            you normally see on the tabletop.
                          </p>
                          <p>
                            Details and highlights are picked out to a degree
                            that makes each model interesting.
                          </p>
                          <br />
                          <h6>Facts:</h6>
                          <ul>
                            <li>- Three different base colours.</li>
                            <li>- Base colours are shaded.</li>
                            <li>
                              - All colours are blended and highlighted once.
                            </li>
                            <li>- Single details are picket out.</li>
                            <li>
                              - Tabletop+ standard will make for a Great looking
                              army and works good for characters as well.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-image">
                        <img
                          className="materialboxed pricingImage"
                          src={
                            window.location.origin +
                            "/images/non-gallery/TabletopPlusEx.JPG"
                          }
                          alt="booh!"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </span>
            </div>
          </div>
          <div id="prices3" className="col s12 l8 push-l2">
            <div>
              <h5>Display Standard</h5>
            </div>
            <div>
              <span>
                <div className="section">
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Troops</th>
                        <th>Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Small Infantry</td>
                        <td>125 kr.</td>
                      </tr>
                      <tr>
                        <td>Medium Infantry</td>
                        <td>150 kr.</td>
                      </tr>
                      <tr>
                        <td>Large Infantry</td>
                        <td>175 kr.</td>
                      </tr>
                      <tr>
                        <td>Biker/Cavalry</td>
                        <td>275 Kr.</td>
                      </tr>
                      <tr>
                        <td>Small tank/Beast</td>
                        <td>500 kr.</td>
                      </tr>
                      <tr>
                        <td>Large tank/Beast&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>800 kr.</td>
                      </tr>
                      <tr>
                        <td>Flyer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>800 kr.</td>
                      </tr>
                      <tr>
                        <td>Behemoth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td>850 kr.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="section">
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Characters</th>
                        <th>Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>HQ/Hero (Small)</td>
                        <td>250 kr.</td>
                      </tr>
                      <tr>
                        <td>HQ/Hero (Mid-Size)</td>
                        <td>300 kr.</td>
                      </tr>
                      <tr>
                        <td>HQ/Hero (Large)</td>
                        <td>350 kr.</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="right note">
                    Peaceful Painting Studio · Last updated 16/3 2019
                  </p>

                  <div className="col s12">
                    <div className="card showcard">
                      <div className="card-stacked">
                        <div className="card-content">
                          <h4 className="center-align">Display standard</h4>
                          <br />
                          <p>
                            Attention to detail is the hallmark of our display
                            standard. Many levels of highlighting and
                          </p>
                          <p>
                            Display standard is perfect for characters and
                            single models you want to stand out. A whole army at
                            this standard will truly look fantastic on the
                            tabletop.
                          </p>
                          <p>
                            shading will ensure these centerpieces’ capture the
                            attention of the viewer.
                          </p>
                          <br />
                          <h6>Facts:</h6>
                          <ul>
                            <li>- Three different base colours.</li>
                            <li>- Base colours are shaded.</li>
                            <li>- All colours are blended and highlighted.</li>
                            <li>- Eyes and all details are picked out.</li>
                            <li>
                              - Display standard will make for a Fantastic
                              looking army and works Great for characters and
                              single models as well.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-image">
                        <img
                          className="materialboxed pricingImage"
                          src={
                            window.location.origin +
                            "/images/non-gallery/DisplayEx.JPG"
                          }
                          alt="booh!"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
