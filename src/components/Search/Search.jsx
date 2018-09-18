import React from "react";
import {connect} from "react-redux";
import styled from "styled-components"
import { NotificationManager} from 'react-notifications';
import { addStudentId } from "../../actions/studentDetailsAction";
import { showLoadingBar } from "../../actions/pageAnimations";


const SearchInput = styled.input`
  margin-left: 10px;
  border-radius: 2px;
  background: #f5f5f5;
  border: 0px;
  padding-left: 10px;
  height:90%;
  &:focus {
    background:white;
    border: 1px solid ghostwhite;    
    box-shadow: 0 2px 2px rgba(0,0,0,0.16), 0 2px 2px rgba(0,0,0,0.23);
    outline: none;
  }

  }
`

class Search extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
    return (
    <div>
    <SearchInput onKeyUp={(e)=> {
        if(e.keyCode === 13){
          this.props.addStudentId(e.target.value) 
          this.props.showLoadingBar(true);
          e.target.value = '';
          document.activeElement.blur();
          NotificationManager.error('Student not found', 'Error!')

        }}} 
        name="passwordInput" 
        placeholder="Add a student code" 
        type="text"
    />
    </div>
    );
   }
};

    const mapStateToProps = (state) => {
      return {
        student: state.student,
        pageAnimations: state.loadingBar
      };
    };

    const mapDispatchToProps = (dispatch) => {
      return {
        addStudentId: (id) => { dispatch(addStudentId(id)) },
        showLoadingBar: (bolean) => { dispatch(showLoadingBar(bolean)) },
        
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search);