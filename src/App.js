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
        listTitle: null,
        cards: [
          "some card text"
        ]
      }
    ]
    */

    this.addList = this.addList.bind(this);
    this.addCard = this.addCard.bind(this);
    this.updateListTitle = this.updateListTitle.bind(this);
    this.updateBoardTitle = this.updateBoardTitle.bind(this);
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
    console.log("in update list title:", inputVal, listIndex);
    this.setState((prevState) => {
      prevState.boardData[listIndex].listTitle = inputVal;
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
        />
      </div>
    );
  }
}

export default App;
