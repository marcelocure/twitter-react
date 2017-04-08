import React, { Component } from 'react';
import Avatar from './Avatar';
import Input from './Input';
import TextArea from './TextArea';

class App extends Component {
  state = {
    value: 'Olha la os papo',
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });

    console.log(this.state.value);
  }

  render() {
    return (
      <div className="App">
        <Avatar
          src="https://static1.comicvine.com/uploads/scale_small/11/113509/4693444-6164752601-ben_a.jpg"
          width="32px"
          height="32px"
        />
        <Input
          placeholder="O que está acontecendo?"
          onClick={() => alert('clicked')}
        />
        <TextArea 
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
