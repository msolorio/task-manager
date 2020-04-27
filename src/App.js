import React from 'react';
import './App.css';
import Title from './Title';
import Lists from './Lists';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boardTitle: "Default Board Title",
      boardData: []
    }

    /*
    boardData: [
      {
        listTitle: "list title",
        cards: [
          "some card text"
        ]
      }
    ]
    */
/*
db.taskboard.insertMany([
  {
    boardTitle: 'Default Board Title',
    boardData: [
      {
        listTitle: "list title",
        cards: [
          "some card text"
        ]
      }
    ]
  }
])

*/

    this.addList = this.addList.bind(this);
    this.addCard = this.addCard.bind(this);
    this.updateListTitle = this.updateListTitle.bind(this);
    this.updateBoardTitle = this.updateBoardTitle.bind(this);
    this.updateCardData = this.updateCardData.bind(this);
  }

  addList() {
    this.setState((prevState) => ({
      boardData: prevState.boardData.concat([{
        listTitle: "new List",
        cards: []
      }])
    }));
  }

  addCard(listIndex) {
    this.setState((prevState) => {
      const prevCards = prevState.boardData[listIndex].cards.slice(0);
      const newCards = prevCards.concat(["new card"]);
      prevState.boardData[listIndex].cards = newCards;

      return {boardData: prevState.boardData};
    })
  }

  updateListTitle(inputVal, listIndex) {
    this.setState((prevState) => {
      prevState.boardData[listIndex].listTitle = inputVal;
      return {boardData: prevState.boardData};
    });
  }

  updateCardData(inputVal, listIndex, cardIndex) {
    this.setState((prevState) => {
      prevState.boardData[listIndex].cards[cardIndex] = inputVal;
      return {boardData: prevState.boardData};
    });
  }

  updateBoardTitle(boardTitle) {
    this.setState({boardTitle});
  }

  render() {
    return (
      <div className="App">
        <Title
          updateTitle={this.updateBoardTitle}
          titleText={this.state.boardTitle}  
        />
        <Lists
          boardData={this.state.boardData}
          addList={this.addList}
          addCard={this.addCard}
          updateListTitle={this.updateListTitle}
          updateCardData={this.updateCardData}
        />
      </div>
    );
  }
}

export default App;
