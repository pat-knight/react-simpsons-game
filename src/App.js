import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/Characters';
import characters from './characters.json';
import Wrapper from './components/Wrapper';
import Header from './components/Header';

class App extends Component {

  state = {
    newScore: 0,
    topScore: 0,
    cards: characters,
    unclicked: characters
}


// try this sort(function(a, b){return 0.5 - Math.random()})
randomize = array => {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

  isClicked = name => {
    const clickedCharacter = this.state.unclicked.find(char => char.name === name);
  
    //character not yet selected
    if(!clickedCharacter){
      this.setState({
        topScore: (this.state.newScore > this.state.topScore) ? this.state.newScore : this.state.topScore,
        newScore: 0,
        cards: characters,
        unclicked: characters

      })
    } 
    else {
      const filterCharacters = this.state.unclicked.filter(char => char.name !== name);

      this.setState({
        newScore: this.state.newScore + 1,
        cards: characters,
        unclicked: filterCharacters
      })
    }
    this.randomize(characters);
  }
  render() {
    return (
      <div>
      <Header
        newScore={this.state.newScore}
        topScore={this.state.topScore}/>
      <Wrapper>
        {
          this.state.cards.map((char, i) => {
              return <CharacterCard 
                key={i}
                id={char.id}
                name={char.name}
                image={char.image}
                isClicked={this.isClicked} 
                newScore={this.state.newScore}
              />
          })
        }
      </Wrapper>
      </div>
    );
  }
}

export default App;
