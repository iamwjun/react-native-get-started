import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

export default class Setting extends React.Component {
    signOut(){
        Alert.alert('退出登陆!');
    }

    operating(navigator){
        Alert.alert(navigator);
    }

    renderRow = (item, index, length) => {
        return (
            <TouchableOpacity onPress={() => this.operating(item.navigator)} style={[styles.item, index < length - 1 ? styles.borderBottom : '']}><Text>{item.key}</Text><View style={[styles.item, styles.icon]}><Text style={styles.desc}>{item.desc}</Text><Image style={styles.image}  source={require('../images/arrow.jpg')} /></View></TouchableOpacity>
        )
    }

    render(){
        const options = [
            { key: '帐号设置', desc: '编辑', top: 10, navigator: 'accountSetting' },
            { key: '使用攻略', desc: '扫码点餐全套攻略在这里', top: 0, navigator: 'useRaiders' }
        ];

        const option = [
            { key: '清除缓存', desc: '566KB', top: 0, navigator: 'clearCache' }
        ];

        return(
            <View style={styles.container}>
                <View style={styles.option}>
                    <FlatList
                        data={options}
                        renderItem={({item, index}) => this.renderRow(item, index, options.length)}
                    />
                </View>
                <View style={styles.option}>
                    <FlatList
                        data={option}
                        renderItem={({item, index}) => this.renderRow(item, index, option.length)}
                    />
                </View>
                <View style={styles.blank}></View>
                <View style={styles.footer}>
                    <Button
                        title="退出登陆"
                        color='#e60012'
                        onPress={this.signOut}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'SourceHanSansCN-Regular',
        backgroundColor: "#f5f5f5",
    },
    option: {
        backgroundColor: "#FFF",
        marginTop: 10,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: "#f5f5f5"
    },
    item: {
        flex: 1,        
        flexDirection: 'row',
        marginLeft: 16,
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',        
        height: 50
    },
    icon: {
        justifyContent: 'flex-end',
        paddingRight: 12,
    },
    desc: {
        paddingRight: 12
    },
    blank: {
        flex: 1
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'stretch'
    }
})