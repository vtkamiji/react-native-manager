import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { CardSection, Input } from './commons';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
	render() {
		return(
			<View>
				<CardSection>
					<Input label="name" placeholder="Jane" 
						value={this.props.name}
						onChangeText={value => this.props.employeeUpdate({prop:'name', value:value})}/>
				</CardSection>

				<CardSection>
					<Input label="Phone" placeholder="555-555-5555" 
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate({prop:'phone', value:value})}/>
				</CardSection>

				<CardSection style={{ justifyContent: 'center' }}>
					<Text style={styles.pickerStyleLabel}>Shift</Text>
					<Picker selectedValue={this.props.shift.value}
						style={{flex: 2}}
						onValueChange={value => this.props.employeeUpdate({prop: 'shift', value: value})}>

						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	pickerStyleLabel: {
		flex: 1,
		fontSize: 18,
		paddingLeft: 20,
		paddingTop: 10
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
}


export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);