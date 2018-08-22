import { NavigationActions, createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation';
//import { Navigator } from './Navigator';
import Feed from './Feed';
import React, { Component } from 'react';
import { Image ,  TouchableOpacity, View ,Text, StyleSheet } from 'react-native';
import ItemDetail from './ItemDetail';
import DrawerContainer from './DrawerContainer';





const DrawerStack = createDrawerNavigator({
    Feed: { screen: Feed },
  }, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  });



class CommonNavTitle extends Component {

    onPress = () => {
        console.log(this.props.navigation);
      
       /* if (this.props.navigation.state.index === 0) {
          
           this.props.navigation.dispatch(DrawerActions.openDrawer());
           console.log('openDrawer');
          } else {
          
           this.props.navigation.dispatch(DrawerActions.closeDrawer());
           console.log('DrawerClose()');
          }
          */
        // this.props.navigation.dispatch(DrawerActions.openDrawer());
        this.props.navigation.navigate('DrawerOpen');

      }


    render() {
        console.log(this.props.navigation);
        return (
            <View style={styles.commonHeader}>
                <TouchableOpacity 
                onPress={this.onPress}
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
        DrawerStack: { screen: DrawerStack }
    }, {
        initialRouteName: 'Feed',
     
        navigationOptions: ({ navigation }) =>({  
            //title: 'Testing',
            console.log(navigation);
            headerTitle: < CommonNavTitle navigation={navigation} />,
           
        })
    }
)

const initialAction = { type: NavigationActions.Init };
const initialState = AppNavigator.router.getStateForAction(initialAction);


export const navReducer = (state = initialState, action) => {
    console.log(action);
    console.log(state);
    console.log(AppNavigator.router);
     const newState = AppNavigator.router.getStateForAction(action, state);
     console.log(newState);
     return newState;
};

const styles = StyleSheet.create({
    commonHeader: {
        flex: 1 ,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    
  });