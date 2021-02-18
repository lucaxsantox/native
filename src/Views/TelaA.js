import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityBase, StyleSheet, Image} from 'react-native'
import TextCenter from '../components/TextCenter'
import Button from '../components/Button'

const TelaA = (props) => {
    return (
        <View>
            <Button navigation={props.navigation}/>
            <TextCenter text="Snack Table"/>
            <img src={require('./Imagens/snacks-i-love-snacks.jpg')}/>
        </View>
    )
}

export default TelaA

