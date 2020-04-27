import React from 'react';
import Title from './Title';
import CardTags from './CardTags';

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddCardClick = this.handleAddCardClick.bind(this);
  }

  handleAddCardClick(index) {
    this.props.addCard(index);
  }

  renderCards(cards, listIndex) {
    return cards.map((cardData, cardIndex) => {
      return (
        <div
          className="card"
          key={cardIndex}
        >
          <Title
            updateTitle={(value) => this.props.updateCardData(value, listIndex, cardIndex)}
            titleText={cardData.cardContent}
          />
          <CardTags tags={cardData.tags} />
        </div>
      );
    });
  }

  renderLists(boardData) {
    return boardData.map((listItem, listIndex) => {  

      return (
        <div
          className="listContainer"
          key={listIndex}
        >
          <Title
            updateTitle={(value) => this.props.updateListTitle(value, listIndex)}
            titleText={listItem.listTitle}
          />
          <div className="list">
            {this.renderCards(listItem.cards, listIndex)}
          </div>
          <div
            className="addCardButton"
            onClick={() => this.handleAddCardClick(listIndex)}>
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