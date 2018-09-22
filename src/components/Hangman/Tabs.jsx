import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import * as actions from "../../actions/hangmanActions";

import Game from "./Game";

const Wrapper = styled.div`
    display:grid;
    border: lightgrey 1px solid;
    background: ghostwhite;
    padding: 2%;
    border-radius: 10px;
    grid-gap: 5px;
    cursor:pointer;
    grid-template-rows: 1fr 8fr;
    grid-template-columns: 1fr
`

const Tab = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const TabName = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    padding: 5px;
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px; 
    width:90%;
    background: #aa00ff;
    color: green;
`

class Tabs extends React.Component {

  render(){
    let view;
    if(true){
      view = <Game/>

    }
    return (
      <Wrapper>        
        <Tab>
        <TabName>Game</TabName>
        <TabName>Word Lists</TabName>
        <TabName>Themes</TabName>
        </Tab>
        { view }
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


export default connect(mapStateToProps, mapDispatchToProps)(Tabs);