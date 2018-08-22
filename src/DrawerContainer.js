
import React, { Component } from 'react';
import { Image , View ,TouchableOpacity ,Text } from 'react-native';

export default class DrawerContainer extends Component{

    render() {
        //console.log(this.props.navigation);
        return (
            <View >
                <TouchableOpacity
                onPress={console.log("pressed.")}
                >
                <Image
                    source={ require('../img/icon_large.png')} 
                    style={{ width: 50, height: 50 }}
                />
                </TouchableOpacity>
                <Text>Testing1</Text>
            </View>
        );
    }
}