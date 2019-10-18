import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';

export const Content = ({ style,showsVerticalScrollIndicator = true, children }) => {
	return (
		<KeyboardAwareScrollView
			automaticallyAdjustContentInsets={false}
			showsVerticalScrollIndicator={showsVerticalScrollIndicator}
			contentContainerStyle={[
				{
					padding: 15,
					flexDirection: 'column',
				},
				style,
			]}
		>
			{children}
		</KeyboardAwareScrollView>
	);
};

Content.propTypes = {
  style: PropTypes.object,
  showsVerticalScrollIndicator: PropTypes.bool
}
