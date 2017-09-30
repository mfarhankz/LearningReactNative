import React from 'react';
import { View, Text } from 'react-native'

const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    return(
        <View style={ viewStyle }>
            <Text style={ textStyle }>{props.headerText}</Text>
        </View>
    );
};

const styles = {

    viewStyle:{
        backgroundColor: '#3d4755',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginTop: 20
    },
    textStyle:{
        fontSize: 20,
        color: '#fff'
    }

};

export { Header };