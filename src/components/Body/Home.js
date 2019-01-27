import React from 'react';
import Icon from './Icon';
import CallToAction from './../Layout/CallToAction';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import $ from 'jquery'
import 'jquery-countdown';

import Loading from './../Layout/Loading';
import Map from './MapWithAMarkerClusterer';


class Home extends React.Component {

  componentDidMount () {
    this.startTimer()
    }

  startTimer = () => {
    $('#pageTimer').countdown('2020/03/01', function(event) {
      $("#months").html(event.strftime('%m'));
      $("#days").html(event.strftime('%n'));
      $("#hours").html(event.strftime('%H'));
      $("#mins").html(event.strftime('%M'));
      $("#secs").html(event.strftime('%S'));
    });
  }

  render(props) {

    let bikesOnTimer = [
      { color: "red", right: "80%", top:"-90px" },
      { color: "white", right: "85%", top:"-90px" },
      { color: "black", right: "83%", top:"-90px" },
      { color: "white", right: "70%", top:"-90px" },
      { color: "black", right: "68%", top:"-90px" },
      { color: "red", right: "40%", top:"-90px" },
      { color: "black", right: "48%", top:"-90px" },
      { color: "white", right: "10%", top:"-90px" },
      { color: "red", right: "5%", top:"-90px" }
    ];

    let bikes = bikesOnTimer.map((bike, index) => (
                  <Icon
                  key={index}
                  style={bike}
                  />
                ))
    

    return(
      <div>
        <section className="transparent-headerimg hg-600" style={{backgroundImage: "url(/images/biker2.jpg)"}}>
          <div className="bg-black-4 hg-600">
            <div className="container p-sm-5 position-relative top-20">
              <div className="row">
                <div className="col-12 text-white text-center montserrat">
                  <h1 className="txt-40 txt-md-50 font-weight-bold pt-md-3 pt-0"> It's the Boulder Bike Tour 2020!</h1>
                  <p>Nisl alias, corrupti magnam sunt nesciunt, accusamus eu sollicitud egestas dis
                    <br/> ac a inventore pede id totam quam sollicitudin consequuntur</p>
                    <HashLink to="/#about" className="btn btn-love btn-lg rounded-0 mt-2 font-weight-bold">More Info</HashLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="open-sans bg-grad-love mb-3">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12 text-white text-center">
                { bikes }
                <h2 className="montserrat font-weight-bold">Count down to the Race!</h2>
                <div id="pageTimer" className="d-flex flex-wrap justify-content-center pt-3 font-weight-bold">
                <div className="mx-4">
                    <span ref="mon" id="months" className="txt-25 txt-sm-40"></span>
                    <br/>
                    <span>Months</span>
                  </div>
                  <div className="mx-4">
                    <span id="days" className="txt-25 txt-sm-40"></span>
                    <br/>
                    <span>Days</span>
                  </div>
                  <div className="mx-4">
                    <span id="hours" className="txt-25 txt-sm-40"></span>
                    <br/>
                    <span>Hours</span>
                  </div>
                  <div className="mx-4">
                    <span id="mins" className="txt-25 txt-sm-40"></span>
                    <br/>
                    <span>Mins</span>
                  </div>
                  <div className="mx-4">
                    <span id="secs" className="txt-25 txt-sm-40"></span>
                    <br/>
                    <span>Secs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-9 pb-6 hide-over lh-2">
          <div className="container" id="about">
            <div className="row">
              <div className="col-lg-6 pt-sm-5 pt-0 pb-5 pb-lg-0 pr-5">
                <h2 className="montserrat font-weight-bold title"> What we are all about</h2>
                <h4 className="text-primary montserrat pb-3 text-love"> Nunc tempor velit augue, </h4>
                <p>Nunc tempor velit augue, quis convallis massa luctus ut. Phasellus felis eros, lacinia ut erat ut, molestie pretium tortor. Cras et aliquet libero. Duis blandit venenatis odio, in sodales lectus rhoncus in Cras et aliquet libero. Duis blandit venenatis odio, in sodales lectus rhoncus in</p>
              </div>
              <div className="col-lg-6">
               <img src="/images/cool.jpg" alt="code" className="img-fluid rounded shadow position-relative"/>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-10">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center pt-md-10 pt-8 pb-5">
              <Icon style={{ position: "absolute", opacity: "0.5", color: "red", right: "40%", top: "30%", zIndex: "-1", transform: "rotate(40deg)", fontSize: "180px" }}/>
                <h1 className="montserrat font-weight-bold">Inside The Bike Tour</h1>
                <p>Ride along with the bikers on their long journey to victory</p>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
            { (this.props.imagesLoading) ? <Loading/> : this.props.images }
            </div>
            <div className="text-center">
              <Link to="/photos" className="btn btn-love btn-lg mt-4 font-weight-bold text-white">See More Photos</Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 ">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 text-center">
                <i className="fas fa-users fa-3x mb-3 txt-love"></i>
                <h1 className="montserrat font-weight-bold pb-5 title-2">Meet the Riders</h1>
                <div className="d-flex flex-wrap justify-content-center">
                { (this.props.ridersLoading) ? <Loading/> : this.props.riders }
                </div>
                <div className="text-center">
                  <Link to="/riders" className="btn btn-love btn-lg mt-4 font-weight-bold text-white">See all the Riders</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="map" className="py-9">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center pb-5">
                <i className="fas fa-map fa-3x mb-3 txt-love"></i>
                <h1 className="montserrat font-weight-bold">Keep up with the Race</h1>
                <p>Ride along with the bikers on their long journey to victory</p>
              </div>
              <div className="hg-500 col-12 text-center bg-secondary mb-9 p-0">
                 <Map ridersMarkers={this.props.ridersForMap}/>
              </div>
            </div>
          </div>
        </section>
        <CallToAction/>
      </div>
    );
  }
}

export default Home;