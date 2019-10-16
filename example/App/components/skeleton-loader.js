import React, { PureComponent } from 'react'
import {  View  } from 'react-native';

export default class SkeletonLoader extends PureComponent {
    constructor(props) {
        super(props)
        console.log(this.props.children)
    }
    render() {
        return (
            <View>
                {this.props.children}
            </View>
        )
    }
}
