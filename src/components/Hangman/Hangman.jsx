import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import * as actions from "../../actions/hangmanActions";
import AlphabetSection from "./AlphabetSection";
import {images }from "./images";

const MainWrapper = styled.div`

    display: grid;
    margin: 0 auto;
    grid-gap:20px;
    @media only screen and (min-width: 320px)  { 
      grid-template-columns: 1fr;
      grid-gap:5px;
    }
    @media only screen and (min-width: 768px)  {   
      grid-template-columns: 1fr 1fr;
      max-width: 700px;
    } 
    @media only screen and (min-width: 1024px) { 
      grid-template-columns: 1fr 1fr;
      max-width: 1000px;
    }
`

const Options = styled.div`
    text-align: right;
    padding: 2px;
`

const ScreenSection = styled.div`
    display: grid;
    border: lightgrey 1px solid;
    background: ghostwhite;
    padding: 10px;
    border-radius: 10px;
    height:300px;
`

const DiscardedLetters = styled.div`
  background: lightpink;
  color: #aa00ff;
  padding: 5px;
  font-size: 1rem;
  text-align:center;
`

const HangmanView = styled.div`
  display: grid;
  color:white;
  grid-template-columns: 1fr;
  grid-template-rows: 7fr 2fr 1fr;

`

const HangmanViewImage = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  background: #6200e9;
`
const HangmanViewWords = styled.div`
  letter-spacing: 10px;
  display:flex;
  align-items: center;
  justify-content: center;
  
  text-align:center;
  font-size: 2rem;
  color:#aa00ff;
`

class Hangman extends React.Component {
    constructor(){
      super()

    }

  render(){
    let semiCompleteWord = this.props.hangman.semiCompleteWord
    
    let divStyle = {backgroundColor: "lightgreen"}
    if(this.props.hangman.incorrectLetters.length >= 10){
      semiCompleteWord = this.props.hangman.word
      divStyle = {backgroundColor: "red", color: "white"}
    }
    return (
    <div>
    <Options><i className="material-icons">settings</i></Options>
    <MainWrapper>
      <ScreenSection>
      <HangmanView>
        <HangmanViewImage>
        <img src={images[this.props.hangman.incorrectLetters.length]} alt="hangman image"/>
        </HangmanViewImage>
        <HangmanViewWords style={divStyle}>{ semiCompleteWord }</HangmanViewWords>
        <DiscardedLetters>
          {this.props.hangman.incorrectLetters.map((item,index) => {
            return <span key={`item-${index}`}> { item } </span>
          })}
      </DiscardedLetters>  
      </HangmanView>
      </ScreenSection>
      <AlphabetSection/>        
    </MainWrapper>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { hangman: state.hangman };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWords: (word) => { dispatch(actions.addWords(word)) },
    reset: () => { dispatch(actions.reset()) },    
    wordFromList: (wordIndex) => { dispatch(actions.wordFromList(wordIndex)) },    
    convertWordToDashes: (currentWord) => { dispatch(actions.convertWordToDashes(currentWord)) },    
    getLetter: (letter) => { dispatch(actions.getLetter(letter)) },   
    letterCheckInsert: () => { dispatch(actions.letterCheckInsert()) }    
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Hangman);