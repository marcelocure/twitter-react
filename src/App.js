import React, { Component } from 'react';
import Avatar from './Avatar';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

class App extends Component {
  state = {
    value: "What's happening?"
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });

    console.log(this.state.value);
  }

  onClickInput = (event) => {
    this.setState({
      styleInput: {display : 'none'},
      styleTextArea: {display : 'inline'},
    });
  }

  render() {
    return (
      <div className="App">
        <Avatar
          src="https://static1.comicvine.com/uploads/scale_small/11/113509/4693444-6164752601-ben_a.jpg"
          width="32px"
          height="32px"
          valign="top"
        />
        &nbsp;&nbsp;
        <TextArea 
          value={this.state.value}
          onChange={this.onChange}
          style={this.state.styleTextArea || {display : 'none'}}
        />
        <Input
          placeholder="What's happening?"
          onClick={this.onClickInput}
          style={this.state.styleInput || {display : 'inline', width: 300}}
        />
        &nbsp;&nbsp;
        <Button
          value="Tweet!"
          />
      </div>
    );
  }
}

export default App;
