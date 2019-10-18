import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Footer = ({ style, children }) => {
	return <View style={[styles.footer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
	footer: {
		minHeight: 48,
		borderTopColor: 'gray',
		borderTopWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 5,
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
});
