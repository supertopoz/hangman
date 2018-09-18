import React, { Component } from 'react';
import {connect} from "react-redux";
import {NotificationContainer} from 'react-notifications';



import { User } from "../components/User";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import  SideMenu from "../components/SideMenu/SideMenu";
import  Header from "../components/Header/Header";
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
            <Route path="/home" component={Home}></Route>
		    <Route path="/about" 
		    	render={()=> {
		    	 return(
		    	 	<About changeUsername={() => this.props.setName("Anna")}/>
		    	 )
		    	}} 
		    />
			<User username={this.props.user.name}/>
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