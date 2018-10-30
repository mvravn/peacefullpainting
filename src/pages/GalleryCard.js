import React from 'react';

{/* HER SKAL DER INDSÆTTES BILLEDER, BRUG TIL AT FÅ DET TIL AT VIRKE */}

const GalleryCard = (props) => {
    const { images } = props;
    const imageList = images.map(image => {
        return(
            <div className="col s12 m4 l3" key={image.id}> 
                <div className="card">
                    <div className="card-image">
                        <img className="materialboxed" src={window.location.origin + '/images/' + image.image} alt={image.title}/>
                    </div>
                    <div className="card-content">
                        <a target="_blank" href={image.info} className="card-title center">{image.title}</a>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div>
            { imageList }
        </div>
    )
}

export default GalleryCard