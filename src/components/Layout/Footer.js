import React from 'react';
import Icon from './../Body/Icon';

const Footer = () => {
  return (
    <div>
      <footer className="bg-secondary">
        <div className="container py-2">
          <div className="row">
            <div className="col-12 col-sm-7">
              <ul className="list-inline text-white mb-0 pt-3 text-center text-sm-left">
              <li className="list-inline-item mr-2"><a href="/" className="text-white">Home</a></li>
                <li className="list-inline-item mr-2"><a href="/" className="text-white">Photos</a></li>
                <li className="list-inline-item mr-2"><a href="/" className="text-white">Riders</a></li>
                <li className="list-inline-item mr-2"><a href="/" className="text-white">Contest</a></li>
              </ul>
              <p className="m-0 pt-1"><a href="/" className="text-white">Info@biketour.com</a></p>
            </div>
            <div className="col-12 col-sm-5 py-3 text-white text-center text-sm-right">
             
              <Icon style={{ position: "absolute", color: "white", right: "0%", top: "-50px" }}/>
              <li className="list-inline-item mr-2"><a href="/" className="text-white"><i className="fab fa-facebook fa-2x text-white"></i></a></li>
              <li className="list-inline-item mr-2"><a href="/" className="text-white"><i className="fab fa-twitter fa-2x text-white"></i></a></li>
              <li className="list-inline-item mr-2"><a href="/" className="text-white"><i className="fab fa-linkedin fa-2x text-white"></i></a></li>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="col-12 text-center text-white py-4">
              <p className="m-0">Boulder Bike Tour 2018</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;