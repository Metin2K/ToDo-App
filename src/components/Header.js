
import React from 'react'
import { View, Text } from 'react-native' 
import Styles from '../Style.js'

function Header({number, setNumber}) {
  return (
    <View style={Styles.Header}>
        <Text style={Styles.HeaderText}>Yapılacaklar</Text>
        <Text style={Styles.HeaderText}>{number}</Text>
    </View>

    )
}

export default Header