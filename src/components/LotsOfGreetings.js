import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Greeting extends Component {
    render() {
        return (
            <Text>{this.props.name}</Text>
        )
    }
}

export default class LotsOfGreetings extends Component {
    render(){
        return(
            <View style={{ alignItems: 'center', top: 50 }}>
                <Greeting name="张三" />
                <Greeting name="李四" />
                <Greeting name="王二麻子" />
            </View>
        )
    }
}