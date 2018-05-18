import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import SimpleMap from './map_component.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: null

    }
  }

  selectFlat = (id) => {
    this.setState({
      selectedFlat: id
    });
  }

  render() {

    return (
      <div className="container">
        <div className="App">
          <FlatList flats={this.props.flats} selectFlat={this.selectFlat}/>
          <div className="map-container">
            <SimpleMap />
          </div>
        </div>
      </div>
    );
  }
}

export default App
