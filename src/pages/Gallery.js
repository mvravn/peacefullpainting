import React, { Component } from "react";
import GalleryCardSold from "./GalleryCardSold";
import GalleryCard from "./GalleryCard";
import image_list from "./image_list.json";
import image_list_ttp from "./image_list_ttp.json";
import image_list_tt from "./image_list_tt.json";
import image_list_gone from "./image_list_gone.json";
import image_list_ttp_gone from "./image_list_ttp_gone.json";
import image_list_tt_gone from "./image_list_tt_gone.json";
import wip_list from "./wip_list.json";
// import inmemoriam_list from "./inmemoriam_list.json";

class Gallery extends Component {
  state = {
    images: image_list.images,
    images_ttp: image_list_ttp.images,
    images_tt: image_list_tt.images,
    images_gone: image_list_gone.images,
    images_ttp_gone: image_list_ttp_gone.images,
    images_tt_gone: image_list_tt_gone.images,
    wip: wip_list.images,
    // inmemoriam: inmemoriam_list.images,
  };

  // https://www.valentinog.com/blog/await-react/
  // https://res.cloudinary.com/dpnrlsiqx/image/list/anders_pp.json
  componentDidMount() {
    fetch(`https://res.cloudinary.com/dpnrlsiqx/image/list/anders_pp_dis.json`)
      .then((res) => res.json())
      // .then((json) => this.setState({ images: json }));
      .then((json) => {
        // console.log("fetched: ", json.resources);
        this.setState({ images: json.resources });
      });

    fetch(`https://res.cloudinary.com/dpnrlsiqx/image/list/anders_pp_ttp.json`)
      .then((res) => res.json())
      // .then((json) => this.setState({ images: json }));
      .then((json) => {
        // console.log("fetched: ", json.resources);
        this.setState({ images_ttp: json.resources });
      });
    fetch(`https://res.cloudinary.com/dpnrlsiqx/image/list/anders_pp_tt.json`)
      .then((res) => res.json())
      // .then((json) => this.setState({ images: json }));
      .then((json) => {
        // console.log("fetched: ", json.resources);
        this.setState({ images_tt: json.resources });
      });
    fetch(
      `https://res.cloudinary.com/dpnrlsiqx/image/list/anders_pp_dis_gone.json`
    )
      .then((res) => res.json())
      // .then((json) => this.setState({ images: json }));
      .then((json) => {
        // console.log("fetched: ", json.resources);
        this.setState({ images_gone: json.resources });
      });

    fetch(
      `https://res.cloudinary.com/dpnrlsiqx/image/list/anders_pp_ttp_gone.json`
    )
      .then((res) => res.json())
      // .then((json) => this.setState({ images: json }));
      .then((json) => {
        // console.log("fetched: ", json.resources);
        this.setState({ images_ttp_gone: json.resources });
      });
    fetch(
      `https://res.cloudinary.com/dpnrlsiqx/image/list/anders_pp_tt_gone.json`
    )
      .then((res) => res.json())
      // .then((json) => this.setState({ images: json }));
      .then((json) => {
        // console.log("fetched: ", json.resources);
        this.setState({ images_tt_gone: json.resources });
      });
    // .then((json) => this.setState({ data: json }));
    // console.log("list: ", image_list.images);
  }

  render() {
    //You must use window.$ or $ will be undefined - SÅDAN INDSÆTTES JQUERY FUNKTIONALITETEN HVOR DEN SKAL BRUGES TIL MATERIALIZE
    window.$(document).ready(function () {
      window.$(".materialboxed").materialbox();
    });

    window.$(document).ready(function () {
      window.$(".carousel").carousel();
    });

    window.$(document).ready(function () {
      window.$(".parallax").parallax();
    });

    return (
      <div>
        {/* dis Gallery */}
        <div className="container">
          <div className="row">
            <div className="section">
              <br></br>
              <h2 className="center">Gallery - The Cicle of Avidity</h2>
            </div>
            <div className="section">
              <h4 className="center">Gallery - Display Standard</h4>
              <p className="center">
                Currently in stock - looking for a less peaceful home
              </p>
            </div>
            <GalleryCard images={this.state.images} />
            <GalleryCardSold images={this.state.images_gone} />
          </div>
        </div>
        {/* Parallax 1 */}
        <br />
        <br />
        <br />
        <div className="hide-on-med-and-down">
          <div className="parallax-container">
            <div className="parallax">
              <img
                src={
                  window.location.origin +
                  "/images/non-gallery/paint_station_1.jpg"
                }
                alt="paint_station_alt"
              />
            </div>
          </div>
        </div>
        {/* ttp Gallery */}
        <div className="container">
          <div className="row">
            <div className="section">
              <h4 className="center">
                Gallery - Tabletop<span className="pricingPlus">+</span>{" "}
                Standard
              </h4>
              <p className="center">
                Currently in stock - looking for a less peaceful home
              </p>
            </div>
            <GalleryCard images={this.state.images_ttp} />
            <GalleryCard images={this.state.images_ttp_gone} />
          </div>
        </div>
        {/* parallax 2 */}
        <br />
        <br />
        <br />
        <div className="hide-on-med-and-down">
          <div className="parallax-container">
            <div className="parallax">
              <img
                src={
                  window.location.origin +
                  "/images/non-gallery/paint_station_2.jpg"
                }
                alt="paint_station_alt"
              />
            </div>
          </div>
        </div>
        {/* tt-Gallery */}
        <div className="container">
          <div className="row">
            <div className="section">
              <h4 className="center">Gallery - Tabletop Standard</h4>
              <p className="center">
                Currently in stock - looking for a less peaceful home
              </p>
            </div>
            <GalleryCard images={this.state.images_tt} />
            <GalleryCard images={this.state.images_tt_gone} />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Gallery;
