import React, { Component } from 'react';
import {connect} from "react-redux";
import {NotificationContainer} from 'react-notifications';

import { Home } from "../components/Home/Home";
import { Disclaimer } from "../components/Disclaimer/Disclaimer";
import Hangman from "../components/Hangman/Hangman";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";
import LoadingBar from "../components/LoadingBar/LoadingBar";

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
            <Route path="/disclaimer" component={Disclaimer}></Route>
			<NotificationContainer/>
			</div>
			);
		}
}

export default App;