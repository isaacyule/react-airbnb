import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="FlatList">
        {this.props.flats.map(flat => {
          <Flat info={flat} />
        })}
      </div>
    );
  }
}

export default FlatList
