import React, { PureComponent } from 'react';
import { View, Text, StyleSheet,Image, Button } from 'react-native';
import { Container, Header, Content, HeaderBody, HeaderRight, HeaderLeft, IconButton } from '../../components/index';
import { GlobalStyle } from '../../theme/global';
import Icon from 'react-native-vector-icons/Ionicons';
import { ExpandableCard } from 'fidisys-expandable-card';

export default class FidisysComponentsScreens extends PureComponent {
	constructor(props) {
		super(props);
		this.title = this.props.navigation.getParam('title');
	}
	goBack() {
		this.props.navigation.pop();
	}
	render() {
		return (
			<Container>
				<Header barStyle="dark-content" statusbarColor="white">
					<HeaderLeft>
						<IconButton buttonEvent={() => this.goBack()}>
							<Icon size={22} color="white" name="md-arrow-back" />
						</IconButton>
					</HeaderLeft>
					<HeaderBody>
						<Text style={[GlobalStyle.headerTitle]}>Component Details</Text>
					</HeaderBody>
					<HeaderRight />
				</Header>
				<Content>
					<Text style={styles.componentTitle}>{this.title}</Text>
					<View style={styles.componentContainer}>
						{this.title == 'fidisys-expandable-card' && (
							<ExpandableCard cardTitle="Fidisys card title">
								<Text style={{ paddingBottom: 15 }}>Expandable Card Content</Text>
								<Image
									style={styles.image}
									loadingIndicatorSource={require('../../assets/icons/pre-loader.gif')}
									defaultSorce={require('../../assets/icons/pre-loader.gif')}
									source={{
										uri:
											'https://cdn.dribbble.com/users/4103091/screenshots/7353178/media/6d1a3a06961c0dcfd513ffe241636472.png',
									}}
								/>
							</ExpandableCard>
						)}
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	componentTitle: {
		color: 'black',
		textAlign: 'center',
		width: '100%',
		fontSize: 18,
		fontWeight: 'bold',
	},
	componentContainer: {
		flexDirection: 'column',
		marginTop: 40,
	},
	image: {
		width: '100%',
		height: 250,
		resizeMode: 'stretch',
		borderRadius: 5,
	},
});
