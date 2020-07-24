import React, { Component } from 'react';
import { View ,Text, TouchableOpacity, Alert} from 'react-native';

export default class Button extends Component{
    render(){
        return (
            <TouchableOpacity onPress={(()=>{
                Alert.alert(this.props.alerta)
            })}>
            {this.props.children}
        </TouchableOpacity>
        )
    }
}


