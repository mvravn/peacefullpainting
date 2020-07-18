import React from "react";

/* HER SKAL DER INDSÆTTES BILLEDER, BRUG TIL AT FÅ DET TIL AT VIRKE */

/* https://res.cloudinary.com/dpnrlsiqx/image/upload/v1591481044/anderspp/IMG_0051_kzrsis.jpg */

/* anderspp/IMG_0051_kzrsis */

/* IMG_2338_nwhjnd */

// context.custom.caption
// https://res.cloudinary.com/demo/image/upload/ar_3.0,c_crop/sample.jpg
// https://res.cloudinary.com/demo/image/upload/w_1080,ar_4:5,c_fill/sample.jpg
// https://res.cloudinary.com/dpnrlsiqx/image/upload/v1591481044/anderspp/IMG_0051_kzrsis.jpg
// https://res.cloudinary.com/dpnrlsiqx/image/upload/v1591481044/anderspp/IMG_0051_kzrsis.jpg

// Alle elementer ud fra className
// componentDidMount: function() {
//   var x = document.getElementsByClassName("card-title");
// console.log(x);
// }

// console.log(x[0].offsetHeight);

// console.log(x);
// Højde på disse

// Sæt alle til højeste

// linje 45: "w_1080,ar_4:5,c_fill/" +

const GalleryCard = (props) => {
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
          <div className="card-content">
            <a
              target="_blank"
              href={image.context.custom.alt}
              className="card-title center"
            >
              {image.context.custom.caption}
            </a>
          </div>
        </div>
      </div>
    );
  });
  return <div>{imageList}</div>;
};

export default GalleryCard;
