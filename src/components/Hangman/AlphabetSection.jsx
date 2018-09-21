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
const Button = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    background: #aa00ff;
    padding: 10px;
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

const WordList = styled.textarea`
    max-height: 42px;
    width: 200px;
`

class AlphabetSection extends React.Component {


  softStart(){
    const wordList = window.localStorage.getItem('words');
    this.props.addWords(JSON.parse(wordList));
  }

   componentDidMount(){
     this.softStart();
   }

   handleChange(e){
    let words = e.target.value.toUpperCase().split(',')

    window.localStorage.setItem('words', JSON.stringify(words));
    this.props.addWords(words)
   }

   reset(resetPosition){
    const wordList = window.localStorage.getItem('words');
    // locally stored words. 
    this.props.reset();
    this.props.addWords(JSON.parse(wordList));
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
    if(this.props.hangman.reachedEndofList){
      return (<Wrapper><Button
        onClick={()=> this.reset(resetPosition)}
        >RESTART</Button>
        <Button
        onClick={()=> this.reset(0)}
        >FINISH</Button>
        </Wrapper>
      )
    }

    if(this.props.hangman.word === '' ){
      return (<Wrapper><Button
        onClick={()=> this.start()}
        >START</Button>
        <WordList value={ this.props.hangman.wordList.join(',')} onChange={this.handleChange.bind(this)}/>
        </Wrapper>
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