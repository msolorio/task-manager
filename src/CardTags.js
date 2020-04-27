import React from 'react';

class CardTags extends React.Component {
  constructor(props) {
    super(props);

    this.addTag = this.addTag.bind(this);
  }

  addTag() {
    console.log("inside add tag");
  }

  render() {
    return (
      <div>

        <button onClick={this.addTag}>add tag</button>
      </div>
    );
  }
}

export default CardTags;