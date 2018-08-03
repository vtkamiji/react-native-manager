import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.containerStyle} >
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottowWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

//Usado para exportar com o index.js
export { CardSection};