import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

export default class FetchBasics extends React.Component {
    constructor(props){
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then(response => response.json())
        .then(res => {
            this.setState({
                isLoading: false,
                dataSource: res.movies
            }, function(){

            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={{ flex:1, padding: 20 }}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{ flex:1, paddingTop: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        )
    }
}