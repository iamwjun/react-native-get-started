import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class About extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../images/about.jpg')} style={styles.aboutImage}></Image>
                <Text style={styles.aboutContent}>毛市佬品牌是在监利县、毛市镇政府要求下，与面点协会26家企业共同参与打造，与2017年注册成立；湖北毛市佬品牌有限公司（目前已经100%转让给嘀嘀达集团）</Text>
                <View style={styles.footer}>
                    <View style={styles.contact}><View style={styles.line}></View><Text style={{padding: 15}}>联系我们</Text><View style={styles.line}></View></View>
                    <Text>400-991-9699</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    aboutImage: {
        width: '100%'
    },
    aboutContent: {
        flex: 1,
	    fontFamily: "SourceHanSansCN-Regular",
	    fontSize: 12,
	    lineHeight: 18,
        color: "#333333",
        padding: 15
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    contact: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },
    line: {
        width: 66,
        height: 1,
        backgroundColor: "#888888"
    }
})