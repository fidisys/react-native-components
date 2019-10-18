import React, { PureComponent } from 'react';
import { View, Easing, Animated, Dimensions } from 'react-native';
import Svg, { G, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import extractBrush from 'react-native-svg/src/lib/extract/extractBrush';
import PropTypes from 'prop-types';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export default class SkeletonLoader extends PureComponent {
	constructor(props) {
		super(props);
		this.inputFill = new Animated.Value(0.3);
		this.fill = this.inputFill.interpolate({
			inputRange: [0, 1],
			outputRange: [this.RandomColor1(), this.RandomColor2()],
		});
	}
	componentDidMount() {
		this.animate();
	}
	animate() {
		Animated.timing(this.inputFill, { toValue: Math.random(), duration: 1200, easing: Easing.linear }).start(() =>
			this.animate()
		);
	}
	render() {
		const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');
		const { aspectRatio, loading } = this.props;
		return (
			<React.Fragment>
				{loading ? (
					<View
						style={{
							aspectRatio: aspectRatio,
						}}
					>
						<AnimatedSvg width="100%" height="100%">
							<Defs>
								<LinearGradient id="grad" x1={'0'} y1={'0'} x2={'100%'} y2={'0'}>
									<Stop offset={'0.0001'} stopColor="#eeeeee" stopOpacity="1" />
									<Stop offset={'0.0002'} stopColor={'#dddddd'} stopOpacity="1" />
									<Stop offset={'0.0003'} stopColor="red" stopOpacity="1" />
								</LinearGradient>
							</Defs>
							<G>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_1"
									height="20%"
									width="35%"
									y="0.75"
									x="1%"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_3"
									height="3%"
									width="60%"
									y="5%"
									x="38%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_5"
									height="3%"
									width="60%"
									y="12%"
									x="38%"
									fill-opacity="null"
									stroke-opacity="null"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_6"
									height="3%"
									width="99%"
									y="25%"
									x="1%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_7"
									height="3%"
									width="99%"
									y="32%"
									x="1%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_8"
									height="3%"
									width="99%"
									y="39%"
									x="1%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_9"
									height="3%"
									width="99%"
									y="46%"
									x="1%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									rx="5"
									stroke="#000"
									id="svg_10"
									height="20%"
									width="35%"
									y="52%"
									x="65%"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_11"
									height="3%"
									width="60%"
									y="57%"
									x="1%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_12"
									height="3%"
									width="60%"
									y="64%"
									x="1%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_13"
									height="3%"
									width="99%"
									y="75%"
									x="1%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_14"
									height="3%"
									width="99%"
									y="82%"
									x="1%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_14"
									height="3%"
									width="99%"
									y="89%"
									x="1%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
								<SvgRectWrap
									stroke="#000"
									rx="5"
									id="svg_14"
									height="3%"
									width="99%"
									y="96%"
									x="1%"
									fill-opacity="null"
									stroke-opacity="null"
									stroke-width="1.5"
									fill={this.fill}
								/>
							</G>
						</AnimatedSvg>
					</View>
				) : (
					this.props.children
				)}
			</React.Fragment>
		);
	}
	RandomColor1() {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	RandomColor2() {
		let letters = 'ABCDEF0123456789';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
}

SkeletonLoader.propTypes = {
  aspectRatio: PropTypes.number,
  loading: PropTypes.bool
};

SkeletonLoader.defaultProps = {
  aspectRatio: 0.75,
  loading: false
}
class SvgRectWrap extends PureComponent {
	setNativeProps = props => {
		if (props.fill) {
			props.fill = extractBrush(props.fill);
		}
		if (props.stroke) {
			props.stroke = extractBrush(props.stroke);
		}

		this._component && this._component.setNativeProps(props);
	};
	render() {
		return <Rect ref={component => (this._component = component)} {...this.props} />;
	}
}

SvgRectWrap = Animated.createAnimatedComponent(SvgRectWrap);

class SvgStop extends PureComponent {
	setNativeProps = props => {
		if (props.fill) {
			props.fill = extractBrush(props.fill);
		}
		if (props.stroke) {
			props.stroke = extractBrush(props.stroke);
		}
		this._component && this._component.setNativeProps(props);
	};
	render() {
		return <Stop ref={component => (this._component = component)} {...this.props} />;
	}
}
SvgStop = Animated.createAnimatedComponent(SvgStop);
