import { NavigationActions, createStackNavigator } from 'react-navigation';
//import { Navigator } from './Navigator';
import Feed from './Feed';
import React, { Component } from 'react';
import { Image ,  TouchableOpacity, View ,Text, StyleSheet } from 'react-native';
import ItemDetail from './ItemDetail';

class CommonNavTitle extends Component {

    render() {
        return (
            <View style={styles.commonHeader}>
                <TouchableOpacity 
                onPress={
                    () => console.log('pressed')}
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



export const AppNavigator = createStackNavigator(
    {
        Feed: { screen: Feed },
        ItemDetail: { screen: ItemDetail },
    }, {
        initialRouteName: 'Feed',

        navigationOptions: {
            //title: 'Testing',
            headerTitle: < CommonNavTitle />,
           /* headerStyle: {
                backgroundColor: 'rgb(255, 0, 0)'
            },*/
        } 
    }
)

const initialAction = { type: NavigationActions.Init };
const initialState = AppNavigator.router.getStateForAction(initialAction);


export const navReducer = (state = initialState, action) => {
    console.log(action);
    console.log(state);
    return AppNavigator.router.getStateForAction(action, state);
};

const styles = StyleSheet.create({
    commonHeader: {
        flex: 1 ,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    
  });