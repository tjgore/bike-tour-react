import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './../Body/Icon';

const CallToAction = () => {
  return (
    <div>
     <section className="open-sans bg-img" style={{ backgroundImage: "url(images/biker2.jpg)" }}>
        <div style={{ backgroundColor: "rgba(255,0,0,0.7)" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-white text-center p-0 py-8">
                <Icon style={{ position: "absolute", color: "red", right: "70%", top: "-40px", zIndex: "1" }} />
                <h2 className="font-weight-bold">Get Involved and <br/> come up with a slogan for the race!</h2>
                <Link to="/contest" className="btn btn-default btn-lg rounded-0 mt-4 font-weight-bold">Submit Slogan</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallToAction;