import React from 'react';

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddCardClick = this.handleAddCardClick.bind(this);
  }

  handleAddCardClick(index) {
    this.props.addCard(index);
  }

  getLists(boardData) {
    return boardData.map((listItem, index) => {  
      
      return (
        <div
          className="listContainer"
          key={index}
        >
          <div className="list">
  
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
          {this.getLists(this.props.boardData)}
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