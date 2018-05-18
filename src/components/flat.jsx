import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

  }

  handleClick = () => {
    this.props.selectFlat(this.props.info.id);
  }

  render() {

    return (

      <div className="card" key={this.props.id} onClick={this.handleClick} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.info.imageUrl})`}} >
        <div className="card-category">£{this.props.info.price}</div>
        <div className="card-description">
          <h2>{this.props.info.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>

    );
  }
}

export default Flat
