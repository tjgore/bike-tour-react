import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './../Body/Body';

import Home from './../Body/Home';
import Photos from './../Body/Photos';
import Riders from './../Body/Riders';
import Contest from './../Body/Contest';
import NotFound from './../Body/NotFound';

import Image from './../Body/Image';
import Rider from './../Body/Rider';

import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

class Layout extends React.Component {

  state = {
    images: [],
    riders: [],
    loadingImages: true,
    loadingRiders: true
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/v1/riders')
    .then( response => {
      this.setState({riders: response.data, loadingRiders: false })
    })
    .catch(error => {
      console.log(error)
    })

    this.getFlickrImages()
  }


  getFlickrImages = (add = false) => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags=bikerace&BoulderBikeTour&tag_mode=any&format=json&per_page=40&nojsoncallback=1')
    .then( response => {
      //response.data.items
      let medias = response.data.items.map((media, i) => {
        return {link: media.media.m, title: media.title}
      })
      if(add === true){
        this.setState((prevState) => {return{ images: [...this.state.images, ...medias], loadingImages: false }})
      } else this.setState({ images: medias, loadingImages: false  })
      
    })
    .catch(error => {
      console.log(error)
    })
  }

  loadMoreImages = () => {
    this.setState((prevState) => {return{ loadingImages: true }})
    this.getFlickrImages(true)
  }

  render() {

    let allRiders = [ ...this.state.riders];
    let mapMarker = [ ...this.state.riders];
    let someRiders = [];
    let allImages = [ ...this.state.images];
    let someImages

    allRiders = allRiders.map((rider, index) => (
      <div key={ index } className="text-center px-2">
      <Rider image={ rider.image } name={ rider.first_name + ' ' +rider.last_name } city={ rider.city + ', ' + rider.state } />
      </div>
      ))

    if(allRiders.length !== 0) {
      someRiders = allRiders.slice(0, 4)
    }
    
    allImages =  allImages.map((image, index) => (
      <Image key={index} image={image.link} alt={image.title}/>
      ))

    if(allImages.length !== 0) {
      someImages = allImages.slice(0, 6)
    }
     
    return(
      <div>
        <Header/>
          <Body>
            <Switch>
              <Route path="/" exact render={() => <Home ridersForMap={mapMarker} riders={someRiders} imagesLoading={this.state.loadingImages} ridersLoading={this.state.loadingRiders} images={someImages}/>}/>
              <Route path="/photos" exact render={() => <Photos images={allImages} imagesLoading={this.state.loadingImages} click={this.loadMoreImages} />}/>
              <Route path="/riders" exact render={() => <Riders riders={allRiders} />}/>
              <Route path="/contest" exact component={Contest}/>
              <Route component={NotFound}/>
            </Switch>
          </Body>
        <Footer/>
      </div>
      )
  }
} 

export default Layout;