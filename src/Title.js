import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSetTitleClick = this.handleSetTitleClick.bind(this);

    this.state = {
      showInput: false,
      inputVal: 'defaultTitle'
    }
  }

  handleInputChange(e) {
    this.props.updateTitle(e.target.value);
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
          value={this.props.titleText}
        />
      </span>
    );

    const SetTitle = (
      <header
        onClick={this.handleSetTitleClick}
      >{this.props.titleText}</header>
    );
    
    return (
      <div
        className="title"
      >
        {this.state.showInput ? TitleInput : SetTitle}
      </div>
    );
  }
}

export default Title;