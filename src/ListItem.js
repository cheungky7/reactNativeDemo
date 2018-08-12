import React,{ Component } from 'react';
import { TouchableOpacity, Text,StyleSheet} from 'react-native';

class ListItem extends Component{
    render(){
        return(
            <TouchableOpacity
                style={[StyleSheet.container,this.props.style]}
                >
                <Text style={StyleSheet.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export default ListItem;

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    text: {
        color: 'white'
    }
})