import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Content, HeaderBody, HeaderRight, HeaderLeft } from '../../components/index';
import { GlobalStyle } from '../../theme/global';

export default class FidisysScreen extends PureComponent {
	constructor(props) {
		super(props);
		this.componentsCollection = ['fidisys-expandable-card', 'fidisys-'];
	}
	render() {
		return (
			<Container>
				<Header barStyle="dark-content" statusbarColor="white">
					<HeaderLeft />
					<HeaderBody>
						<Text style={[GlobalStyle.headerTitle]}>Fidisys</Text>
					</HeaderBody>
					<HeaderRight />
				</Header>
				<Content>
					<Text style={styles.contentTitle}>Fidisys Components</Text>
					{this.componentsCollection.map((component, index) => (
						<TouchableOpacity
							onPress={() => this.props.navigation.push('details',{title: component})}
							activeOpacity={0.3}
							style={styles.componentContainer}
							key={index}
						>
							<Text style={styles.componentText}>
								{`${index + 1}.`} {component}
							</Text>
						</TouchableOpacity>
					))}
				</Content>
			</Container>
		);
	}
}

export const styles = StyleSheet.create({
	componentContainer: {
		height: 50,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	componentText: {
		color: 'blue',
		fontSize: 17,
	},
	contentTitle: {
		color: 'black',
		fontSize: 18,
		width: '100%',
		marginBottom: 30,
		fontWeight: 'bold'
	}
});
