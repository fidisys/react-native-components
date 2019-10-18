import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

export const Container = ({ style, children }) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={[style, GlobalStyle.mainContainer]}>{children}</View>
		</SafeAreaView>
	);
};

const GlobalStyle = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'flex-start',
	},
});
