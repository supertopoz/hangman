import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import Keyboard from "react-simple-keyboard";
import "simple-keyboard/build/css/index.css";

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

const layout = {
  default: [
    "Q W E R T Y U I O P",
    "A S D F G H J K L ,",
    "Z X C V B N M {bksp}",
    "{space}"
  ]
};

const display = {
  "{bksp}": "DEL",
  "{space}": " "
};

class Game extends React.Component {

  handleChange(e, mobile){
    let words;
    mobile? words = e.split(','): words = e.target.value.toUpperCase().split(',');
    window.localStorage.setItem('words', JSON.stringify(words));
    this.props.addWords(words)
   }  

  isMobile() {
    return (typeof window.matchMedia != 'undefined' || typeof window.msMatchMedia != 'undefined')?
      window.matchMedia("(pointer:coarse)").matches : false;
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
    const word = this.props.hangman.currentWordIndex + 1
    word >= JSON.parse(words).length? this.props.reachedEnd() : this.reset(word);
  }

  render(){
    let view;
    let keyboard = <div></div>;
    let textAreaDisable = false;
    if(this.isMobile()){
      textAreaDisable = true;
      keyboard = (<Keyboard layout={layout} display={display} onChange={e => this.handleChange(e,'mobile')}/>)
    }

    if(this.props.hangman.reachedEndofList){
      return (
        <Wrapper>
          <Button onClick={()=> this.reset(0)} >RESTART</Button>
          <Button onClick={()=> this.props.reset()} >FINISH</Button>
        </Wrapper>
      )
    }

    if(this.props.hangman.word === '' ){
      return (
        <StartWrapper>          
          <WordInput disabled={ textAreaDisable} value={ this.props.hangman.wordList} onChange={this.handleChange.bind(this)}/>          
          <WordList/>
          <Button onClick={()=> this.reset(0)}>START</Button>
          {keyboard}
        </StartWrapper>
      )
    }


    if(this.props.hangman.word === this.props.hangman.semiCompleteWord ||this.props.hangman.incorrectLetters.length >= 10){
      return (
        <Wrapper>
          <Button onClick={()=> this.selectButton()}>NEXT</Button>
        </Wrapper>
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
        onClick={()=> this.props.reset()}
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