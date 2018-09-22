import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import * as actions from "../../actions/hangmanActions";

import WordList from "./WordList";

const Wrapper = styled.div`
    display:grid;
    background: ghostwhite;
    border-radius: 10px;
    grid-gap: 5px;
    cursor:pointer;
    grid-template-rows: auto;
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

const StartWrapper = styled.div`
    display:grid;
    background: ghostwhite;
    border-radius: 10px;
    grid-gap: 5px;
    cursor:pointer;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

`

const Button = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    background: #aa00ff;
    padding: 5px;
    color: white;
    border-radius: 10px;
    text-align: center;
    max-height: 25px;
    &:hover{
      background: white;
      color:#aa00ff;
      border: 1px solid;
    }
 `

const WordInput = styled.textarea`
    max-height: 42px;
    width: 100%;
    border: 0;
    background: white no-repeat;
    background-image: linear-gradient(to bottom, #aa00ff, #aa00ff), linear-gradient(to bottom, silver, silver);
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
    &:focus{
      background-size: 100% 2px, 100% 1px;
      outline: none;
    }
`


class Game extends React.Component {


  softStart(){
    let wordList = window.localStorage.getItem('words');
    if(wordList === null){
      wordList = JSON.stringify(["EXAMPLE","EXAMPLE"]);
      window.localStorage.setItem('words', wordList);
    }
    this.props.addWords(JSON.parse(wordList));
  }

   componentDidMount(){
   }

   resetFromToBegining(){
    this.props.reset();
    this.softStart();
   }

   handleChange(e){
    let words = e.target.value.toUpperCase().split(',')
    window.localStorage.setItem('words',  JSON.stringify(words));
    this.props.addWords(words)
   }

   reset(resetPosition){
    const wordList = this.props.hangman.wordList;
    this.props.reset();
    this.props.addWords(wordList);
    this.props.wordFromList(resetPosition);
    this.props.convertWordToDashes()
   }

   selectButton(){
    const words = window.localStorage.getItem('words');
    const wordList = JSON.parse(words)
    // locally stored words.
    const word = this.props.hangman.currentWordIndex + 1
    word >= wordList.length? this.props.reachedEnd() : this.reset(word);
  }

  start(){
    this.reset(0)
  }

  render(){
    let view;
    if(this.props.hangman.reachedEndofList){
      return (<Wrapper><Button
        onClick={()=> this.reset(0)}
        >RESTART</Button>
        <Button
        onClick={()=> this.resetFromToBegining()}
        >FINISH</Button>
        </Wrapper>
      )
    }

    if(this.props.hangman.word === '' ){
      return (
        <StartWrapper>
          
          <WordInput value={ this.props.hangman.wordList.join(',')} onChange={this.handleChange.bind(this)}/>
          <WordList/>
          <Button onClick={()=> this.start()}>START</Button>
        </StartWrapper>
      )
    }


    if(this.props.hangman.word === this.props.hangman.semiCompleteWord ||this.props.hangman.incorrectLetters.length >= 10){
      return (<Wrapper><Button
        onClick={()=> this.selectButton()}
        >NEXT</Button></Wrapper>
      )
    }




    return (
      <Wrapper>        
        { this.props.hangman.availableLetters.map((item, index)=>{
          return  <Button onClick={()=> {
            if(item !== '#'){
              this.props.getLetter(item);
              this.props.letterCheckInsert()
            }
          }} 
          key={`letter-${index}`}
          >{item}
          </Button>  
          })
        }
        <Button
        onClick={()=> this.resetFromToBegining()}
        ><i className="material-icons">arrow_back</i></Button>
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


export default connect(mapStateToProps, mapDispatchToProps)(Game);