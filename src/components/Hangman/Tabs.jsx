import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import * as actions from "../../actions/pageAnimations";

import Game from "./Game";
import WordList from "./WordList";

const Wrapper = styled.div`
    display:grid;
    border: lightgrey 1px solid;
    background: ghostwhite;
    padding: 2%;
    border-radius: 10px;
    grid-gap: 10px;
    cursor:pointer;
    grid-template-rows: 1fr 8fr;
    grid-template-columns: 1fr
`

const Tab = styled.div`
    display: grid;
    grid-gap: 5px
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
    background: none;
    color: #aa00ff;
`




class Tabs extends React.Component {

  componentDidMount(){
    this.props.setTabs('game');
  }

  changeTab(tab){
    this.props.setTabs(tab);
  }

  render(){
    let view;
    let gameTab;
    let wordListTab;
    let themesTab;
    if(this.props.pageAnimations.tab === 'game') {
      view = <Game /> 
      gameTab = {backgroundColor: "#aa00ff", color: "white"}
    }
    if(this.props.pageAnimations.tab === 'wordList'){
      view = <WordList/>
      wordListTab = {backgroundColor: "#aa00ff", color: "white"}
    }
    if(this.props.pageAnimations.tab === 'themes') {
      view = <Themes/>
      themesTab = {backgroundColor: "#aa00ff", color: "white"}
    }

    return (
      <Wrapper>        
        <Tab>
        <TabName style={gameTab} onClick={()=> this.changeTab("game")}>Game</TabName>
        <TabName style={wordListTab} onClick={()=> this.changeTab("wordList")}>Themes</TabName>
        </Tab>
        { view }
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { pageAnimations: state.pageAnimations };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTabs: (word) => { dispatch(actions.setTabs(word)) },  
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Tabs);