import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
    return (
        <View style={{alignItems: 'flex-end', padding:20, color: '#f54242' }}>
                <TouchableOpacity onPress={() => {
                    props.navigation.openDrawer();
                    setTimeout(() => {
                        props.navigation.closeDrawer();
                    }, 10000)
                }}>
                    <Text style={{fontSize: 30}}>Menu</Text>
                </TouchableOpacity>
            </View>
    )
}

export default Button
