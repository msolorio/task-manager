import React from 'react';
import './App.css';
import BoardTitle from './BoardTitle';
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
        listTitle: null,
        cards: [
          "some card text"
        ]
      }
    ]
    */

    this.addList = this.addList.bind(this);
    this.addCard = this.addCard.bind(this);
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
    console.log("in addCard, list index:", listIndex);

    this.setState((prevState) => {
      const prevCards = prevState.boardData[listIndex].cards.slice(0);
      const newCards = prevCards.concat(["new card"]);
      prevState.boardData[listIndex].cards = newCards;

      return {boardData: prevState.boardData};
    })
  }

  render() {
    console.log('/////////////////////////////////////');
    console.log('this.state:', this.state);
    console.log('/////////////////////////////////////');

    return (
      <div className="App">
        <BoardTitle />
        <Lists
          boardData={this.state.boardData}
          addList={this.addList}
          addCard={this.addCard}
        />
      </div>
    );
  }
}

export default App;
