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
    let myWords = window.localStorage.getItem('my_words') || ''
    let myNewWords = JSON.parse(myWords)
    if(category === 'my_words'){
        this.props.addWords(myNewWords)
        this.props.wordListCategory('my_words')
    } else {
        this.props.addWords(words[category]);
        this.props.wordListCategory(category)
    }        
  }

  render(){ 
    return (
      <Wrapper>
        <div onClick={()=> { this.addWords('my_words') }} >My Words</div>
        {Object.keys(words).map((word, index) => {
          return ( 
            <div key={`word-${index}`} 
              onClick={()=> {
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
    wordListCategory: (type) => { dispatch(actions.wordListCategory(type)) },
    addWords: (word) => { dispatch(actions.addWords(word)) },
    reset: () => { dispatch(actions.reset()) },    
    changeTab: (tab) => { dispatch(pageActions.setTabs(tab)) }, 
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(WordList);