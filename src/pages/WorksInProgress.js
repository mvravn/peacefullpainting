import React from "react";

/* TILRETTET FRA GALLERCARD.JS */

const WorksInProgress = (props) => {
  const { images } = props;
  const wipList = images.map((image) => {
    return (
      <div key={image.id}>
        <a className="carousel-item">
          <img
            className="z-depth-1"
            src={window.location.origin + "/images/wip/" + image.image}
            alt={image.title}
          />
        </a>
      </div>
    );
  });
  return (
    <div>
      <h4 className="center">Recent Projects</h4>
      <div className="carousel">{wipList}</div>
    </div>
  );
};

export default WorksInProgress;
