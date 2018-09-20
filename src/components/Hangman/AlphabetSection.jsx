import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import * as actions from "../../actions/hangmanActions";

const Wrapper = styled.div`
    display:grid;
    border: lightgrey 1px solid;
    background: ghostwhite;
    padding: 10px;
    border-radius: 10px;
    grid-gap: 5px;
    cursor:pointer;
    @media only screen and (min-width: 320px)  { 
      grid-template-columns: repeat(7, 1fr)
    }
    @media only screen and (min-width: 768px)  {   
      grid-template-columns: repeat(6, 1fr)
    } 
    @media only screen and (min-width: 1024px) { 
      grid-template-columns: repeat(5, 1fr)
    }
`
const Letter = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    background: #aa00ff;
    padding: 10px;
    color: white;
    border-radius: 10px;
    text-align: center;
    &:hover{
      background: white;
      color:#aa00ff;
      border: 1px solid;
    }
 `

const NextButton = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    background: #aa00ff;
    color: white;
    height: 50px;
    padding-left:5px;
    padding-right:5px;
    border-radius: 10px;
    text-align: center;
    gird-column: 2;
    &:hover{
      background: white;
      color:#aa00ff;
      border: 1px solid;
    }
`


class AlphabetSection extends React.Component {

  reset(){
    const wordList = ['APPLE','BAT','CAT'];
    const word = this.props.hangman.currentWordIndex + 1
    if(word >= wordList.length){
      this.props.reachedEnd();
    } else {
    this.props.reset();
    this.props.addWords(wordList);
    this.props.wordFromList(word);
    this.props.convertWordToDashes()
  }
  }

  start(){
    const wordList = ['APPLE','BAT','CAT'];
    this.props.reset();
    this.props.addWords(wordList);
    this.props.wordFromList(0);
    this.props.convertWordToDashes()
  }

  render(){
    
    if(this.props.hangman.reachedEndofList){
      return (<Wrapper><NextButton
        onClick={()=> this.start()}
        >RESTART</NextButton></Wrapper>
      )
    }

    if(this.props.hangman.word === '' ){
      return (<Wrapper><NextButton
        onClick={()=> this.start()}
        >START</NextButton></Wrapper>
      )
    }

    if(this.props.hangman.word === this.props.hangman.semiCompleteWord ||this.props.hangman.incorrectLetters.length >= 10){
      return (<Wrapper><NextButton
        onClick={()=> this.reset()}
        >NEXT</NextButton></Wrapper>
      )
    }

    return (
      <Wrapper>        
      { this.props.hangman.availableLetters.map((item, index)=>{

        return  <Letter onClick={()=> {
          if(item !== '#'){
            this.props.getLetter(item);
            this.props.letterCheckInsert()
          }
        }} 
        key={`letter-${index}`}
        >
        {item}
        </Letter>  
      })}
      </Wrapper>
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
    letterCheckInsert: () => { dispatch(actions.letterCheckInsert()) },   
    reachedEnd: () => { dispatch(actions.reachedEnd()) }    
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AlphabetSection);