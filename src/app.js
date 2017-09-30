import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Header, Card, CardSection } from './components/common'

class App extends Component {
    render(){
        return(
            <View>
                <Header headerText={'Header'}/>
                <Card>
                    <Text>Hello World!</Text>
                </Card>
            </View>
        );
    }
}

export default App;
