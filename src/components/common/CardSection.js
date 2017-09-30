import React from 'react';
import { View } from 'react-native'

const CardSection = (props) => {
    const { cardSSectionStyle } = styles;
    return(
        <View style={ cardSSectionStyle } />
    );
};

const styles = {

    cardSSectionStyle:{
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }

};

export { CardSection };