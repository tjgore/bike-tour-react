import React from "react"
import { compose, withProps, withHandlers, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { MarkerClusterer } from  'react-google-maps/lib/components/addons/MarkerClusterer';

const MapWithAMarkerClusterer = compose(
  withStateHandlers(() => ({
   isOpen: false,
 }),
  {
    onToggleOpen: ({isOpen}) => () => ({
      isOpen: !isOpen
    }),
    showInfo: ({isOpen}) => (i) => ({
      isOpen: true, 
      showInfoIndex: i
    })
  }),
  withProps({
    isMarkerShown: true,
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8FgNi3T6OUefCGh9pSjm3CkxkwhKGFew",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `515px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: (props) => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
    },
  }),
  withScriptjs,
  withGoogleMap
  )((props) =>
  <GoogleMap
  defaultZoom={12}
  defaultCenter={{ lat: 40.0187068, lng: -105.2806633 }}
  >
  <MarkerClusterer
  onClick={props.onMarkerClustererClick}
  averageCenter
  enableRetinaIcons
  gridSize={60}
  >
  {props.markers.map((marker, i) => (
    <Marker
    onClick={() => {props.showInfo(marker.id )}}
    key={marker.id}
    position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
    >
    { props.showInfoIndex === marker.id && props.isOpen
      && <InfoWindow onCloseClick={() => props.onToggleOpen()}>
    <div style={ {padding: "10px"} }>
    <img src={ marker.image } style={{ width: "120px", marginBottom: "10px" }} alt={marker.first_name} />
    <p style={{ margin: "0px" }}>{ marker.first_name } { marker.last_name }</p>
    </div>
    </InfoWindow>}
    </Marker>
    ))}
  </MarkerClusterer>
  </GoogleMap>
  );

  class Map extends React.PureComponent {
    /*state = {
      isMarkerShown: true,
    }*/

    handleMarkerClick = () => {
      console.log(this.props.ridersMarkers);
      console.log("marker clicked");
    }

    render() {
    
    return (
      <MapWithAMarkerClusterer markers={this.props.ridersMarkers} />
      )
  }
}

export default Map;