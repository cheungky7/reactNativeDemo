import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Item extends Component {
    static navigationOptions=({ navigation, navigationOptions }) => {

        //const { params } = navigation.state;

        return {
        title: `Item ${navigation.state.params.item}`,
        /*headerStyle: {
            backgroundColor: navigationOptions.headerStyle.backgroundColor,
        }*/
    };
}

    
    render()
    {
        const {item,index}=this.props.navigation.state.params;
        return (
            <View style={[styles.container , { backgroundColor: `#${index}${index}${index}`}]}>
                <Text style={styles.text}>{`I am item ${item} detail!`}</Text>
            </View>
        )
    }
}

export default Item;

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    text:{
        fontSize:20,
        color:'rgb(255,255,255)'
        
    }
})