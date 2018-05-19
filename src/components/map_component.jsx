import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);

  }

  static defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844
    },
    zoom: 17
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.center}
          defaultZoom={this.props.zoom}
          center={ {
            lat: this.props.selectedFlat.lat,
            lng: this.props.selectedFlat.lng,
            zoom: 20
          }}
        >
          <AnyReactComponent
            lat={this.props.selectedFlat.lat}
            lng={this.props.selectedFlat.lng}
            text={`${this.props.selectedFlat.name}`}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
