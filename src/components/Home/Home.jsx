import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
		max-width: 700px;
		display: grid;
		margin: 0 auto;
		grid-gap:20px;
		margin-top: 20px;
`

const Banner = styled.div`
		background: ghostwhite;
		border: 1px solid lightgrey;
    padding: 40px;
		border-radius: 10px;
		text-align: center;
`

const Header = styled.div`
  color:#aa00ff;
  font-size: 3rem; 
`

export const Home = (props) => {
    return (
        <Wrapper>
        	<Banner>
        	 <Header>
           HANGMAN FOR EDUCATION
           </Header>
           </Banner>
        </Wrapper>
    );
};