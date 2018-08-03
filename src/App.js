import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		var config = {
		    apiKey: "AIzaSyBjNN83JJhMOVabtFSc3sGp-Ze9txazEUM",
		    authDomain: "manager-a2d4c.firebaseapp.com",
		    databaseURL: "https://manager-a2d4c.firebaseio.com",
		    projectId: "manager-a2d4c",
		    storageBucket: "manager-a2d4c.appspot.com",
		    messagingSenderId: "285711152506"
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;