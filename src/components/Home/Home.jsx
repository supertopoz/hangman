import React from "react";
import styled from "styled-components"
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
		width: 80%;
		display: grid;
		margin: 0 auto;
		grid-gap:20px;
		margin-top: 5%;
`

const Banner = styled.div`
		background: ghostwhite;
		border: 1px solid lightgrey;
    padding: 2%;
		border-radius: 10px;
		text-align: center;
`

const Header = styled.div`
  color:#aa00ff;
  font-size: 3rem; 
`

const Button = styled.div`
    display:flex;
    width: 20%;
    margin: 0 auto;
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
      cursor:pointer;
    }
 `

export const Home = (props) => {
    return (
        <Wrapper>
        	<Banner>
        	 <Header>
           HANGMAN FOR EDUCATION
           <p style={ {fontSize: "1rem"}}>
             Here you can play hangman. Add your own words, choose from several themes and word lists. Great to play in class or on your own. Works without internet on modern browsers.
           </p>         
           </Header>
           </Banner>
           <Link to="/hangman" ><Button >PLAY HANGMAN</Button></Link>
        </Wrapper>
    );
};