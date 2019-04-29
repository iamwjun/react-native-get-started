import React, { Component } from 'react';
import Canvas, {Image as CanvasImage} from 'react-native-canvas';
import { StyleSheet, View } from 'react-native';

export default class DemoCanvas extends Component{
    constructor(props){
        super(props);
        this.state = { imageURI: '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'}
    }

    handleCanvas =  (canvas) => {
        const image = new CanvasImage(canvas);
        canvas.width = 300;
        canvas.height = 300;
        
        const context = canvas.getContext('2d');
    
        image.src = `data:image/jpeg;base64,${this.state.imageURI}`
    
        image.addEventListener('load', () => {
          context.drawImage(image, 0, 0, 300, 300);
        }); 
      }
  

  render() {
    return (
        <View style={styles.container}>
            <Canvas ref={this.handleCanvas}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });