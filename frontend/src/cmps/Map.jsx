import { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import airBnb from '../assets/imgs/1.png';

class _MyMap extends Component {
  state = {
    center: {
      lat: 32.109333,
      lng: 34.855499,
    },
    mapStyles: {
      width: '100%',
      height: '100%',
    },
    isInfoWindowOpen: false,
  };

  mapClicked = (mapProps, map, clickEvent) => {
    const center = { lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() };
    this.setState({ center });
  };

  onMarkerClick = () => {
    this.setState({ isInfoWindowOpen: true });
  };

  onInfoWindowClose = () => {
    this.setState({ isInfoWindowOpen: true });
  };

  render() {
    const { stay } = this.props;
    let newCenter = {
      lat: stay.loc.lat,
      lng: stay.loc.lng,
    };
    let center = newCenter;
    const google = window.google;

    return (
      <div style={{ position: 'relative', width: '100%', height: '40vh' }}>
        <Map google={this.props.google} zoom={14} initialCenter={center} center={center} onClick={this.mapClicked}>
          <Marker
            icon={{
              url: airBnb,
              scaledSize: new this.props.google.maps.Size(30, 30),
            }}
            onClick={this.onMarkerClick}
            name={'Current location'}
            position={center}
          />
          <InfoWindow visible={this.state.isInfoWindowOpen} position={center} onClose={this.onInfoWindowClose}>
            <div>
              <p>Exact location provided after booking.</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export const MyMap = GoogleApiWrapper({
  apiKey: 'AIzaSyCzuZp75Yeu8Eh4TD1RtRYO3Cxs-R5wNwo',
})(_MyMap);
