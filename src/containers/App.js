import React, { Component } from 'react';
import {connect} from "react-redux";
import {NotificationContainer} from 'react-notifications';

import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Disclaimer } from "../components/Disclaimer/Disclaimer";
import Hangman from "../components/Hangman/Hangman";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import { setName } from "../actions/userActions";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'react-notifications/lib/notifications.css';

class App extends React.Component {
		render() {
			return (
			<div>
			<SideMenu menu={true}/>
			<Header/>
			<LoadingBar/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/hangman" component={Hangman}></Route>
            
		    <Route path="/about" 
		    	render={()=> {
		    	 return(
		    	 	<About changeUsername={() => this.props.setName("Anna")}/>
		    	 )
		    	}} 
		    />
		    <Route path="/disclaimer" component={Disclaimer}></Route>
			<NotificationContainer/>
			</div>
			);
		}
}

		const mapStateToProps = (state) => {
			return {
				user: state.user,
				math: state.math
			};
		};

		const mapDispatchToProps = (dispatch) => {
			return {
				setName: (name) => { dispatch(setName(name)) },				
		};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);