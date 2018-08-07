import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './commons';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {

	componentWillMount() {		
		this.props = {...this.props, email: 'teste@teste.com', password: 'teste1'};		
	}	

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size='large' />
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		);
	}

	onButtonPress() {
		const {email, password} = this.props;		
		this.props.loginUser({email, password});
	}

	renderError() {
		if(this.props.error) {
			return (
				<View style={{ backgroundColor: 'white'}}>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	render () {
		return(
			<Card>
				<CardSection>
					<Input label="Email"
						placeholder="email@email.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email} />
				</CardSection>

				<CardSection>
					<Input label="Password"
						secureEntry
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}/>
				</CardSection>

				{this.renderError()}

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

const mapStateToProps = (state) => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error, 
		loading: state.auth.loading
	}
}

export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser})(LoginForm);