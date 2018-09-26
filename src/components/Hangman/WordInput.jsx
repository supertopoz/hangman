import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import * as hangmanActions from "../../actions/hangmanActions";
import * as pageAnimations from "../../actions/pageAnimations";
import WordList from "./WordList";
import { words } from "./words"


const Input = styled.textarea`
    width: 95%;
    border:none;
    padding: 2%;
    color: #aa00ff;
    font-size: 1.3rem;
    background: white no-repeat;
    background-image: linear-gradient(to bottom, #aa00ff, #aa00ff), linear-gradient(to bottom, silver, silver);
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
    &:focus{
      background-size: 100% 2px, 100% 1px;
      outline: none;
      box-shadow: 2px 2px 5px 0px #9E9E9E;
    }
`

const MobileWrapper = styled.div`
    display: grid; 
    top: 0px;
    left: 0px;
    box-shadow: none;
    position: absolute;
    background: rgba(0,0,0,0.6);
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: 2fr 1fr 5fr;
    padding-top: 20%;
`

const DesktopWrapper = styled.div``


class WordInput extends React.Component {

  handleChange(e, mobile){
    console.log('clicked')
    let newWords;
   
    mobile? newWords = e.split(','): newWords = e.target.value.toUpperCase().split(',');
    window.localStorage.setItem('my_words', JSON.stringify(newWords));
    this.props.addWords(newWords)
   }  

   textAreaFocus(e, eventType){
    console.log(e.target.focus())
    if(this.props.pageAnimations.isMobile){
      this.props.displayMobileInputs(true);
    }
   }

   textAreaBlur(){
    if(this.props.pageAnimations.isMobile){
      this.props.displayMobileInputs(false);
    }
   }
   


  render(){
      let input = <Input onBlur={()=> this.textAreaBlur()} onFocus={(e) => this.textAreaFocus(e)}></Input>
      if(this.props.hangman.wordListCategory !== 'my_words'){
        return <div>{this.props.hangman.wordList.map((item, index) => <span key={`word-${index}`}>{item}, </span>)}</div>
      }
      if(this.props.pageAnimations.displayMobileInputs) return <MobileWrapper><div></div>{input}<div></div></MobileWrapper>      
      return <DesktopWrapper>{input}</DesktopWrapper>
    }
}


const mapStateToProps = (state) => {
  return { hangman: state.hangman, pageAnimations: state.pageAnimations };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWords: (word) => { dispatch(hangmanActions.addWords(word)) },
    reset: (options) => { dispatch(hangmanActions.reset(options)) },    
    wordFromList: (wordIndex) => { dispatch(hangmanActions.wordFromList(wordIndex)) },    
    wordListCategory: (wordListCategory) => { dispatch(hangmanActions.wordListCategory(wordListCategory)) },    
    convertWordToDashes: (currentWord) => { dispatch(hangmanActions.convertWordToDashes(currentWord)) },    
    getLetter: (letter) => { dispatch(hangmanActions.getLetter(letter)) },   
    letterCheckInsert: () => { dispatch(hangmanActions.letterCheckInsert()) },   
    reachedEnd: () => { dispatch(hangmanActions.reachedEnd()) },
    displayMobileInputs: (display) => { dispatch(pageAnimations.displayMobileInputs(display)) }    
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(WordInput);