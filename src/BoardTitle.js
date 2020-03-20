import React from 'react';

function TitleInput() {
  return <input/>;
}

class BoardTitle extends React.Component {
  constructor(props) {
    super(props);

    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSetTitleClick = this.handleSetTitleClick.bind(this);

    this.state = {
      showInput: false,
      inputVal: 'defaultTitle'
    }
  }

  handleTitleClick() {
    console.log('title was clicked');
  }

  handleInputChange(e) {
    this.setState({inputVal: e.target.value});

    console.log(this.state.inputVal);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.setState((prevState) => {
        return {showInput: !prevState.showInput};
      });
    }
  }

  handleSetTitleClick() {
    this.setState({showInput: true});
  }

  render() {
    const TitleInput = (
      <span>
        <input
          type="text"
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          value={this.state.inputVal}
        />
      </span>
    );

    const SetTitle = (
      <header
        onClick={this.handleSetTitleClick}
      >{this.state.inputVal}</header>
    );

    if (this.state.showInput) return TitleInput;
    return SetTitle;
  }
}

export default BoardTitle;