import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import MapComponent from './map_component.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: "",

    }
  }

  render() {

    return (
      <div className="App">
        <div className="right-scene">
          <FlatList flats={this.props.flats} />
        </div>
        <div className="left-scene">
          <MapComponent />
        </div>
      </div>
    );
  }
}

export default App
