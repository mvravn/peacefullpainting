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

    // Sørger for at alle titler har samme højde. Ellers går card-fordelingen i vasken. Kører flere gange for at ramme så snart noget er klart.
    setTimeout(function () {
      var x = document.getElementsByClassName("card-title");
      var titleheights = [];
      for (let i = 0; i < x.length; i++) {
        titleheights.push(x[i].clientHeight);
      }
      for (let i = 0; i < x.length; i++) {
        x[i].style.height = Math.max(...titleheights) + "px";
      }
    }, 100);
    setTimeout(function () {
      var x = document.getElementsByClassName("card-title");
      var titleheights = [];
      for (let i = 0; i < x.length; i++) {
        titleheights.push(x[i].clientHeight);
      }
      for (let i = 0; i < x.length; i++) {
        x[i].style.height = Math.max(...titleheights) + "px";
      }
    }, 300);
    setTimeout(function () {
      var x = document.getElementsByClassName("card-title");
      var titleheights = [];
      for (let i = 0; i < x.length; i++) {
        titleheights.push(x[i].clientHeight);
      }
      for (let i = 0; i < x.length; i++) {
        x[i].style.height = Math.max(...titleheights) + "px";
      }
    }, 500);
    setTimeout(function () {
      var x = document.getElementsByClassName("card-title");
      var titleheights = [];
      for (let i = 0; i < x.length; i++) {
        titleheights.push(x[i].clientHeight);
      }
      for (let i = 0; i < x.length; i++) {
        x[i].style.height = Math.max(...titleheights) + "px";
      }
    }, 5000);

    // Fade-in script
    setTimeout(function () {
      var y = document.getElementsByClassName("card");
      // var titleheights = [];
      for (let i = 0; i < y.length; i++) {
        y[i].style.opacity = "1";
      }
      // for (let i = 0; i < x.length; i++) {
      //   x[i].style.height = Math.max(...titleheights) + "px";
      // }
    }, 300);
    setTimeout(function () {
      var y = document.getElementsByClassName("card");
      // var titleheights = [];
      for (let i = 0; i < y.length; i++) {
        y[i].style.opacity = "1";
      }
      // for (let i = 0; i < x.length; i++) {
      //   x[i].style.height = Math.max(...titleheights) + "px";
      // }
    }, 800);
    setTimeout(function () {
      var y = document.getElementsByClassName("card");
      // var titleheights = [];
      for (let i = 0; i < y.length; i++) {
        y[i].style.opacity = "1";
      }
      // for (let i = 0; i < x.length; i++) {
      //   x[i].style.height = Math.max(...titleheights) + "px";
      // }
    }, 5000);
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
          <div className="row" style={{ minHeight: "100vh" }}>
            <div className="section">
              <br></br>
              <h2 className="center">Gallery - The Cicle of Avidity</h2>
            </div>
            <div className="section">
              <h4 className="center">Display Standard</h4>
              <p className="center">
                Some currently in stock - looking for a less peaceful home
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
                Tabletop<span className="pricingPlus">+</span> Standard
              </h4>
              <p className="center">
                Some currently in stock - looking for a less peaceful home
              </p>
            </div>
            <GalleryCard images={this.state.images_ttp} />
            <GalleryCardSold images={this.state.images_ttp_gone} />
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
              <h4 className="center">Tabletop Standard</h4>
              <p className="center">
                Some currently in stock - looking for a less peaceful home
              </p>
            </div>
            <GalleryCard images={this.state.images_tt} />
            <GalleryCardSold images={this.state.images_tt_gone} />
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
