import React from "react";
import {connect} from "react-redux";
import styled from "styled-components"

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import  Search from '../Search/Search';
import { showSideMenu } from "../../actions/pageAnimations";
const FixedHeader = styled.div`
  display: grid;
  grid-gap:10px;
  grid-template-columns: 3fr 1fr 10fr 10fr 1fr;
  background: white;
  padding: 7px;
  border-bottom: 1px solid lightgrey;
`

const Menu = styled.div`
  padding-top: 0.5rem;
  padding-left: 1%;
  cursor: pointer;
`

const Logo = styled.img`
  width: 2.5rem;
`
const logoImg = `data:image/png;base64,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`

const HelpButton = styled.div`
  padding: 1px;
  color: #2b368c;
  text-align: right;
`

class Header extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
      console.log('header props', this.props)
    return (
        <FixedHeader>
          { console.log('These are props for the header:', this.props)}
          <Menu onClick={()=> this.props.showSideMenu(true)}><i className="material-icons">menu</i></Menu>                
          <Link to="/home"><Logo src={logoImg}/></Link>
          <Search />
          <div></div>
          <Link to="/about">
            <div>
              <HelpButton><i className="material-icons">info</i></HelpButton>            
            </div>
           
          </Link>
        </FixedHeader>
    );
  }
};

    const mapStateToProps = (state) => {
      return {
        student: state.student,
        sideMenu: state.pageAnimations.sideMenu

      };
    };

    const mapDispatchToProps = (dispatch) => {
      return {
        addStudentId: (id) => { dispatch(addStudentId(id))},
        showSideMenu: (visibility) => { dispatch(showSideMenu(visibility))}   
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
