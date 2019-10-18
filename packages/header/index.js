import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';

const BarStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';

export const Header = ({ style, statusbarColor = 'blue', barStyle = BarStyle, children }) => {
    return (
        <View
            style={[
                {
                    height: 48,
                    paddingHorizontal: 10,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                    backgroundColor: '#5297ff'
                },
                style
            ]}
        >
            <StatusBar backgroundColor={statusbarColor} barStyle={barStyle} />
            {children}
        </View>
    );
};

Header.propTypes = {
    style: PropTypes.object,
    statusbarColor: PropTypes.string,
    barStyle: propTypes.string
};

export const HeaderLeft = ({ style, children }) => {
    return (
        <View
            style={[
                {
                    flexDirection: 'row',
                    minWidth: '15%',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                },
                style
            ]}
        >
            {children}
        </View>
    );
};
export const HeaderBody = ({ style, children }) => {
    return (
        <View
            style={[
                {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                style
            ]}
        >
            {children}
        </View>
    );
};
export const HeaderRight = ({ style, children }) => {
    return (
        <View
            style={[
                {
                    flexDirection: 'row',
                    minWidth: '15%',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                },
                style
            ]}
        >
            {children}
        </View>
    );
};
