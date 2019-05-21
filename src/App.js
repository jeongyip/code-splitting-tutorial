import React, { Component } from 'react';
import loadable from '@loadable/component'
// import notify from './notify.js';

const SplitMe = loadable(() => import('./SplitMe'));

class App extends Component {
  state = {
    visible: false,
  };

  handleClick = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { visible } = this.state;
    return <div>
      <button onClick={ this.handleClick }>Click Me</button>
      { visible &&
          <SplitMe />
      }
    </div>
  }
}

export default App;
