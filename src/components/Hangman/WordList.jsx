import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import { words } from "./words"
import * as actions from "../../actions/hangmanActions";
import * as pageActions from "../../actions/pageAnimations";

const Wrapper = styled.div`
    display:grid;
    background: ghostwhite;
    grid-gap: 5px;
    cursor:pointer;
    grid-template-columns: 1fr
`

class WordList extends React.Component {

  addWords(category){
    this.props.reset();
    let myWords = JSON.parse(window.localStorage.getItem('words')) || ['']
    category === 'myWords'? 
        this.props.addWords(myWords): 
        this.props.addWords(words[category]);
  }

  render(){
    return (
      <Wrapper>
        <div onClick={()=> {
          this.addWords('myWords') 
          this.props.changeTab('game')}
        }>
        My Word List
        </div>
        {Object.keys(words).map((word, index) => {
          return ( 
          <div key={`word-${index}`} onClick={
            ()=> {
            this.addWords(word) 
            this.props.changeTab('game')
          }
          }>
          {word}
          </div>)
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
    changeTab: (tab) => { dispatch(pageActions.setTabs(tab)) }, 
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(WordList);