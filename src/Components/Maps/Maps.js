import React, { Component } from "react";
import { compose, withProps } from "recompose";
//import { useSelector, useDispatch } from "react-redux";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  // InfoWindow,
  // InfoBox,
} from "react-google-maps";
import { GOOGLE_API_KEY } from "../../Constants/config";

//const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const dayMapStyle = require("./dayMapStyle.json");
const nightMapStyle = require("./nightMapStyle.json");
//const styles = require("./GoogleMapStyles.json");
//sessionStorage.getItem("darkTheme")
// const darkThemeEnabled = useSelector(
// (state) => state.themeReducer.darkThemeEnabled
// );
var iconBase =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

var icons = {
  parking: {
    icon: iconBase + "parking_lot_maps.png",
  },
  library: {
    icon: iconBase + "library_maps.png",
  },
  info: {
    icon: iconBase + "info-i_maps.png",
  },
};

const API_KEY = GOOGLE_API_KEY;
// console.log("Api key.");
// const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
// console.log(apiKey);
// console.log(GOOGLE_API_KEY);
// console.log(process.env);

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      API_KEY +
      "&v=3.exp&libraries=geometry,drawing,places",
    // googleMapURL:
    //  "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `86.2vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    key={props.darkThemeEnabled}
    defaultZoom={15}
    defaultCenter={{ lat: 38.8602091, lng: -77.3851033 }}
    defaultOptions={{
      disableDefaultUI: true, // disable default map UI
      draggable: true, // make map draggable
      keyboardShortcuts: false, // disable keyboard shortcuts
      scaleControl: true, // allow scale controle
      scrollwheel: true, // allow scroll wheel
      styles: props.darkThemeEnabled ? nightMapStyle : dayMapStyle, // change default map styles
    }}
  >
    {props.isMarkerShown && (
      <Marker
        icon={"https://maps.gstatic.com/mapfiles/ms2/micons/cabs.png"}
        position={{ lat: 38.8602091, lng: -77.3851033 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

export default class Maps extends React.PureComponent {
  state = {
    isMarkerShown: false,
    darkTheme: !sessionStorage.getItem("darkTheme"),
  };

  componentDidMount() {
    this.delayedShowMarker();
    //console.log("default darkTheme");
    // console.log(sessionStorage.getItem("darkTheme"));
    //sessionStorage.setItem("darkTheme", true);
    var dark = Boolean(sessionStorage.getItem("darkTheme") == "false");
    // console.log(!dark);
    this.setState({ darkTheme: dark });
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 500);
  };

  handleMarkerClick = () => {
    // this.setState({ isMarkerShown: false });
    // this.delayedShowMarker();
    //this.setState({ darkTheme: !this.state.darkTheme });
    alert("PlaceHolder for dmv popup");

    //sessionStorage.setItem("darkTheme", !sessionStorage.getItem("darkTheme"))
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        darkThemeEnabled={this.state.darkTheme}
      />
    );
  }
}
