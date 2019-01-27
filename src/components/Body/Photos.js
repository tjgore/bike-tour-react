import React from 'react';
import Icon from './Icon';
import CallToAction from './../Layout/CallToAction';
import BreadCrumb from './../Layout/BreadCrumb';
import Loading from './../Layout/Loading';

const Photos = (props) => {

// create another image array here and when load more is clicked add them to this array instead of array in layout
//onmount add 10 more images to the images array here
// might have to make this component into a class

  return (
    <div>
    <BreadCrumb image={{ backgroundImage: "url(/images/fast.jpg)"}} title="Boulder Bike Tour Photos"/>
    <section className="pb-10">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pt-10 pb-5">
           <Icon style={{ position: "absolute", opacity: "0.5", color: "red", right: "40%", top: "30%", zIndex: "-1", transform: "rotate(40deg)", fontSize: "180px" }}/>
            <h1 className="montserrat font-weight-bold">Inside The Bike Tour</h1>
            <p>Ride along with the bikers on their long journey to victory</p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          { props.images }
        </div>
         <div className="text-center">
          { (props.imagesLoading) ? <Loading/> : '' }
          </div>
        <div className="text-center">
          <button className="btn btn-love btn-lg mt-4 font-weight-bold text-white" onClick={props.click} >Load More</button>
        </div>
      </div>
    </section>
    <CallToAction/>
    </div>
  )
}

export default Photos;