import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function TextCenter( {text}) {
    return (
        
            <View style={css.container}>
                <Text style={css.text}>
                    {text}
                </Text> 

            </View>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f54242',
        marginBottom: 20
    },
    text: {
        fontSize: 50,
        color: '#fff'
    }
})

export default TextCenter

