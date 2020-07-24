import React , {Component} from 'react';
import { View , StyleSheet} from 'react-native';



export default class Header extends Component{
    render(){
        return (
            <View>
                {this.props.children}
            </View>
        )
    } 
}

