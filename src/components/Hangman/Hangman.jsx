import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`

    display: grid;
    margin: 0 auto;
    grid-gap:20px;
    margin-top: 20px;
    @media only screen and (min-width: 320px)  { 
      grid-template-columns: 1fr;
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
  
`

const ScreenSection = styled.div`
    display: grid;
    border: lightgrey 1px solid;
    background: ghostwhite;
    padding: 10px;
    border-radius: 10px;
    height:300px;
    grid-template-rows: 5fr 1fr;

`

const DiscardedLetters = styled.div`
  background: #424242
  color: white;
  padding: 10px;
  border-radius: 10px;

    
`
const DiscardedLettersTitle = styled.div`
`

const HangmanView = styled.div`

`

const AlphabetSection = styled.div`
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
    border: 1px solid;
    background: #aa00ff;
    padding: 10px;
    color: white;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    &:hover{
      background: white;
      color:#aa00ff;
      border: 1px solid;
    }
 `

const alphatbet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export const Hangman = (props) => {
 return (
      <div>
      <Options>Options</Options>
      <MainWrapper>
      
      
      <ScreenSection>
      <HangmanView></HangmanView>
      <DiscardedLetters>
      <DiscardedLettersTitle>Not Found:</DiscardedLettersTitle>
      A,B,C,D,E,F,B
      </DiscardedLetters>  
      </ScreenSection>
      <AlphabetSection>        
      {alphatbet.map((item, index)=>{
        return  <Letter key={`letter-${index}`}>{item}</Letter>  
      })}
      </AlphabetSection>


      </MainWrapper>
      </div>
    );
}