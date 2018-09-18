import React from "react";
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Menu = styled.div`
  display: grid;
  margin-top: -8px;
  margin-left: -10px;
  z-index: 10;
  position: absolute;
  height: 100%;
  width: 100%;
  grid-template-columns: 2fr 10fr;
`

const MenuHeader = styled.div`
    height: 65px;
    background: ghostwhite;
    border-bottom: 1px solid lightgrey;
`

const MenuLink = styled.div`
    margin-left: 10px;
    padding: 10px;
    font-size: 1.5rem;

`

const LeftColumn = styled.div`
  background: white;
  z-index: 200;
  box-shadow: 3px 0px 4px #9E9E9E;

`

const RightColumn = styled.div`
  background: transparent;
`

class SideMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sideMenuVisibility: false
        }
    }

    hideMenu (){
       this.setState({sideMenuVisibility: false});
    }

    componentDidMount(){
       if(this.props.menu){
         this.setState({sideMenuVisibility: true});
       }
       

    }


    render(){
    if(this.state.sideMenuVisibility){
    return (

        <Menu>
        <LeftColumn onMouseLeave={(e)=> this.hideMenu()}>
        <MenuHeader/>
        <MenuLink>
        <Link to="/about" onClick={() => this.hideMenu()}>About</Link>
        </MenuLink>
        <MenuLink>
        <Link to="/home" onClick={() => this.hideMenu()}>Home</Link>
        </MenuLink>
        </LeftColumn>
        </Menu>
    );
    } 
    return (<div></div>)
    }
};

export default SideMenu;