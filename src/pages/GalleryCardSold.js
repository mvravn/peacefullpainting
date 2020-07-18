import React from "react";

const GalleryCardSold = (props) => {
  const { images } = props;
  const imageList = images.map((image) => {
    return (
      <div className="col s12 m4 l3" key={image.public_id}>
        <div className="card z-depth-2">
          <div className="card-image">
            <img
              className="materialboxed"
              src={
                "https://res.cloudinary.com/dpnrlsiqx/image/upload/" +
                "w_700,ar_4:5,c_fill/" +
                "v1591481044/" +
                image.public_id +
                "." +
                image.format
              }
              alt={image.context.custom.caption}
            />
          </div>
          <div className="card-content card-content-sold">
            <a
              target="_blank"
              href={image.context.custom.alt}
              className="card-title center"
            >
              {image.context.custom.caption}
            </a>
            <img
              className="sold"
              src={"../../images/non-gallery/sold.png"}
              alt={"sold"}
            />
          </div>
        </div>
      </div>
    );
  });
  return <div>{imageList}</div>;
};

export default GalleryCardSold;
