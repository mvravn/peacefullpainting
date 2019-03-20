import React, { Component } from 'react';

class Pricing extends Component {

    render() {

        //You must use window.$ or $ will be undefined - SÅDAN INDSÆTTES JQUERY FUNKTIONALITETEN HVOR DEN SKAL BRUGES TIL MATERIALIZE
        window.$(document).ready(function(){
            window.$('.collapsible').collapsible();
        });

        return (


            
            <div className="container">

                <ul class="collapsible">
                    <li>
                        <div class="collapsible-header"><i class="material-icons">looks_3</i>First</div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">looks_two</i>Second</div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">looks_one</i>Third</div>
                        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>

                <div className="section">
                <br></br>
                    <h2 className="center">Pricing and Services</h2>
                </div>
                
                <div className="row">
                    
                    <div className="col s12 l8 push-l2 section">
                        <h5>Tabletop Standard</h5>
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
                                <td>35 kr.</td>
                            </tr>
                            <tr>
                                <td>Medium Infantry</td>
                                <td>40 kr.</td>
                            </tr>
                            <tr>
                                <td>Large Infantry</td>
                                <td>50 kr.</td>
                            </tr>
                            <tr>
                                <td>Biker/Cavalry</td>
                                <td>75 Kr.</td>
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
                    <div className="col s12 l8 push-l2 section">
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
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 l8 push-l2 section">
                        <h5>High End Tabletop Standard</h5>
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
                                <td>55 kr.</td>
                            </tr>
                            <tr>
                                <td>Medium Infantry</td>
                                <td>60 kr.</td>
                            </tr>
                            <tr>
                                <td>Large Infantry</td>
                                <td>70 kr.</td>
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
                    <div className="col s12 l8 push-l2 section">
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
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 l8 push-l2 section">
                        <h5>Display Standard</h5>
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
                    <div className="col s12 l8 push-l2 section">
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
                        <p className="right note">Peaceful Painting · Last updated 16/3 2019</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default Pricing