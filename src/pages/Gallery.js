import React, { Component } from 'react';
import GalleryCard from './GalleryCard';
import image_list from './image_list.json';
import WorksInProgress from './WorksInProgress';
import wip_list from './wip_list.json';
import InMemoriam from './InMemoriam';
import inmemoriam_list from './inmemoriam_list.json';

{/* 
HER SKAL DER INDSÆTTES BILLEDER, BRUG TIL AT FÅ DET TIL AT VIRKE 
https://www.youtube.com/watch?v=o4GCcSn-hEw&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=15
*/}

class Gallery extends Component {
    state = { 
        images: image_list.images,
        wip: wip_list.images,
        inmemoriam: inmemoriam_list.images
    }
    
    render() {

        //You must use window.$ or $ will be undefined - SÅDAN INDSÆTTES JQUERY FUNKTIONALITETEN HVOR DEN SKAL BRUGES TIL MATERIALIZE
        window.$(document).ready(function(){
            window.$('.materialboxed').materialbox();
        });

        window.$(document).ready(function(){
            window.$('.carousel').carousel();
        });

        window.$(document).ready(function(){
            window.$('.parallax').parallax();
        });

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="hide-on-med-and-down">
                            <WorksInProgress images={this.state.wip}/>
                        </div>
                        <div className="section">
                            <h4 className="center">Gallery</h4>
                            <p className="center">Currently in stock</p>
                        </div>
                        <GalleryCard images={this.state.images}/>
                    </div>
                </div>
                <div className="hide-on-large-only">
                    <WorksInProgress images={this.state.wip}/>
                </div>
                <br/><br/><br/>
                <div className="hide-on-med-and-down">
                    <div className="parallax-container">
                        <div className="parallax">
                            <img src={window.location.origin + '/images/non-gallery/paint_station_2.jpg'} alt="paint_station_alt"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="section">
                            <h4 className="center">In Memoriam</h4>
                            <p className="center">Miniatures no longer with us</p>
                        </div>
                        <InMemoriam images={this.state.inmemoriam}/>
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        )
    }
}

export default Gallery