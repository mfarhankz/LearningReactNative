import React from 'react';
import { View } from 'react-native'

const Card = (props) => {
    const { cardStyle } = styles;
    return(
        <View style={ cardStyle } />
    );
};

const styles = {

    cardStyle:{
        backgroundColor: '#ddd',
        margin: 5
    }

};

export { Card };