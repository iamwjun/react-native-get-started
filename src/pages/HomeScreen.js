import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginTop: 20, }}>
          <Button
            title="Go to About"
            style={{ margin: '20', }}
            onPress={() => this.props.navigation.navigate('About')}
            color="#841584"
          />
        </View>
        <View style={{ marginTop: 20, }}>
          <Button
            title="Go to Setting"
            onPress={() => this.props.navigation.navigate('Setting')}
          />
        </View>
        <View style={{ marginTop: 20, }}>
          <Button
            title="Go to Canvas"
            color="#841584"
            onPress={() => this.props.navigation.navigate('Canvas')}
          />
        </View> 
        <View style={{ marginTop: 20, }}>
          <Button
            title="Go to Webview"
            onPress={() => this.props.navigation.navigate('Webview')}
          />
        </View>
        <View style={{ marginTop: 20, }}>
          <Button
            title="Go to ImagePicker"
            color="#841584"
            onPress={() => this.props.navigation.navigate('ImagePickeDemo')}
          />
        </View>
      </View>
    );
  }
}