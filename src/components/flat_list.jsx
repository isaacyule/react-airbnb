import React, { Component } from 'react';

import Flat from './flat.jsx';

class FlatList extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="flat-list">
        {this.props.flats.map(flat =>
          <Flat info={flat} key={flat.id} selectFlat={this.props.selectFlat} />
        )}
      </div>
    );
  }
}

export default FlatList
