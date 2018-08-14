import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListItem from './ListItem';

class Feed extends Component {
    static navigationOptions=() => (
        {
            title: 'My Feed'
        }
    )

    renderItems=() => {
        return ['one', 'three', 'five'].map((item, i) =>{
            return (
               
                <ListItem 
                          key={item}
                          text={`Im item ${item}`}
                          style={{ padding: 10, backgroundColor: `rgb(${i * 20}, ${(i + 1) * 50}, ${(i + 2) * 30})` }}
                          onPress={() => {
                              console.log(item);
                              this.props.navigation.navigate('ItemDetail', { item, index: i });
                          }}
                />
            );
        });
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.text}> I am feed!</Text>
                {this.renderItems()}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgb(0, 255, 0)'
    },
    text:{
        color: 'rgb(255, 255, 255)',
        fontSize: 20,
        padding: 20
    }
})


export default Feed;
