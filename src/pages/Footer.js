import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer blue-grey darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Peacefull Painting</h5>
                <p className="grey-text text-lighten-4">Always feel free to <a href="mailto:peaceful.painting.dk@gmail.com">send me an e-mail</a></p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Find me on social media</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Peaceful-Painting-1028253260684179/">Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" target="_blank" rel="noopener noreferrer" href="https://twitter.com/peacefull_paint?lang=da">Twitter</a></li>
                  <li><a className="grey-text text-lighten-3" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/peaceful.painting/">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright blue-grey darken-4">
            <div className="container center">
            © 2018 Copyright <a target="_blank" rel="noopener noreferrer" href="http://mvravn.dk/portfolio">Eupolemos</a>
            </div>
          </div>
        </footer>
    )
}

export default Footer