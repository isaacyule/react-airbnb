import React, { Component } from 'react';

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
        {this.props.flats.map(item =>
          <p>{item.name}</p>
        )}
      </div>
    );
  }
}

export default App
