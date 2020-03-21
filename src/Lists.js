import React from 'react';
import Title from './Title';

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddCardClick = this.handleAddCardClick.bind(this);
  }

  handleAddCardClick(index) {
    this.props.addCard(index);
  }

  renderCards(listItem) {
    return listItem.cards.map((cardData, index) => {
      return (
        <div
          className="card"
          key={index}
        >
          {cardData}
        </div>
      );
    });
  }

  renderLists(boardData) {
    return boardData.map((listItem, index) => {  

      return (
        <div
          className="listContainer"
          key={index}
        >
          <Title
            updateTitle={(value) => this.props.updateListTitle(value, index)}
            titleText={listItem.listTitle}
          />
          <div className="list">
            {this.renderCards(listItem)}
          </div>
          <div
            className="addCardButton"
            onClick={() => this.handleAddCardClick(index)}>
            add card
          </div>
        </div>
      );
    });
  }
  

  render() {
    return (
      <div className="listsContainer">
        <div className="lists">
          {this.renderLists(this.props.boardData)}
        </div>
        <div
          className="addListButton"
          onClick={this.props.addList}
        >Add List</div>
      </div>
    );
  }
}

export default Lists;