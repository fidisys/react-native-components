import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Animated,
    TouchableOpacity,
    Platform,
    Text,
    StyleSheet,
    PixelRatio
} from 'react-native';
import PropTypes from 'prop-types';

export default class ExpandableCard extends Component {
    static propTypes = {
        /** Title of the card in string which is mandatory */
        cardTitle: PropTypes.string.isRequired,
        /** custom react style object for toggle icon */
        iconStyle: PropTypes.object,
        /** custom react style object for card title */
        titleStyle: PropTypes.object,
        /** custom react style object for expandable card content */
        contentStyle: PropTypes.object
    };
    static defaultProps = {
        cardTitle: 'This is card title'
    };
    constructor(props) {
        super(props);
        this._Button = null;
        this.state = {
            toggle: false,
            height: 70,
            dropDownAnimation: new Animated.Value(0),
            showDropdownModal: false,
            animation: new Animated.Value(60)
        };
        this.toggleCard = this.toggleCard.bind(this);
        this.onClosed = this.onClosed.bind(this);
        this.expandCard = this.expandCard.bind(this);
        this.collapseCard = this.collapseCard.bind(this);
    }
    toggleCard() {
        let finalValue = this.state.toggle
            ? this.state.minHeight
            : this.state.maxHeight + this.state.minHeight;

        this.setState(prev => ({
            toggle: !prev.toggle
        }));
        Animated.timing(this.state.animation, {
            toValue: finalValue,
            duration: 450
        }).start();
    }

    expandCard(value) {
        if (!value) {
            let finalValue = this.state.maxHeight + this.state.minHeight;
            this.setState({
                toggle: true
            });
            Animated.timing(this.state.animation, {
                toValue: finalValue,
                duration: 450
            }).start();
        }
    }
    collapseCard(value) {
        let finalValue = this.state.minHeight;
        this.setState({
            toggle: false
        });
        Animated.timing(this.state.animation, {
            toValue: finalValue,
            duration: 450
        }).start();
    }
    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }
    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }
    onClosed(value) {
        this.setState({
            showDropdownModal: value
        });
    }

    render() {
        const { cardTitle, titleStyle, iconStyle, contentStyle } = this.props;
        return (
            <Animated.View style={[styles.cardContainer, { height: this.state.animation }]}>
                <View
                    style={{
                        overflow: 'scroll'
                    }}
                >
                    <View
                        style={{
                            height: 60,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start'
                        }}
                        onLayout={this._setMinHeight.bind(this)}
                    >
                        <TouchableOpacity
                            activeOpacity={0.35}
                            style={{
                                paddingHorizontal: 15,
                                maxHeight: 60,
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                            onPress={this.toggleCard}
                        >
                            <Text style={[styles.cardTitle, titleStyle]}>{cardTitle}</Text>
                            <View
                                style={{
                                    width: '8%',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end'
                                }}
                            >
                                <Icon
                                    name={this.state.toggle ? 'ios-arrow-up' : 'ios-arrow-down'}
                                    style={[iconStyle]}
                                    size={25}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={[
                            contentStyle,
                            {
                                paddingHorizontal: 15,
                                paddingBottom: 15
                            }
                        ]}
                        _setMaxHeight
                        onLayout={this._setMaxHeight.bind(this)}
                    >
                        {this.props.children}
                    </View>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 15,
        borderRadius: 8,
        marginHorizontal: 2,
        borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        borderColor: '#ccc',
        flexWrap: 'nowrap',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    cardTitle: {
        fontSize: 18,
        width: '92%',
        fontWeight: '400',
        justifyContent: 'center',
        color: '#454545'
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.9,
        shadowRadius: 6,
        elevation: 5
    }
});
