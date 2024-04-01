
import React from 'react'
import { View,FlatList, Text } from 'react-native'
import Styles from '../Style.js'

function Container({data, setData, number, setNumber}) {
    const todosil = (id) => {
        setData(data.filter((item) => item.id!== id))
        setNumber(number- 1);

    }
    // const removeItem = (id) => {
    //     const newData = data.filter(item => item.id !== id);
    //     setData(newData);
  return (

    <View style={Styles.Container}>
      <FlatList style={Styles.List}
        data={data}
        renderItem={({ item }) => <Text onLongPress={() => todosil(item.id)} style={Styles.ListeEleman}>{item.text}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
      
    
    )
}

export default Container