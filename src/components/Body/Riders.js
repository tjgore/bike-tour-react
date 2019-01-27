import React from 'react';
import CallToAction from './../Layout/CallToAction';
import BreadCrumb from './../Layout/BreadCrumb';

const Riders = (props) => {

  return (
    <div>
    <BreadCrumb image={{ backgroundImage: "url(/images/fast.jpg)"}} title="Boulder Bike Tour Riders"/>
      <section className="bg-gray-100">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <i className="fas fa-users fa-3x mb-3 txt-love"></i>
              <h1 className="montserrat font-weight-bold pb-5 title-2">Meet the Riders</h1>
              <div className="d-flex flex-wrap justify-content-center mb-3">
              { props.riders }
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction/>
    </div>
  )
}

export default Riders;