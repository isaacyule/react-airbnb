import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import SimpleMap from './map_component.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: {
        id: null,
        name: null,
        lat: null,
        lng: null
      }

    }
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: {
        id: flat.id,
        name: flat.name,
        lat: flat.lat,
        lng: flat.lng
      }
    });
  }

  render() {

    console.log(this.state);

    return (
      <div className="container">
        <div className="App">
          <FlatList flats={this.props.flats} selectFlat={this.selectFlat}/>
          <div className="map-container">
            <SimpleMap selectedFlat={this.state.selectedFlat} />
          </div>
        </div>

      </div>
    );
  }
}

export default App
