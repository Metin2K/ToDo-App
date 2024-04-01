
import React, { useState } from "react"
import { View, Button, TextInput} from "react-native"
import Styles from "../Style"
  
function Add({number, setNumber, textInputValue, setTextInputValue, data, setData}) {
    


    const todoEkle = () =>{
    setNumber(number + 1);
    setData([...data, { id: String(data.length + 1), text: textInputValue }]);
    setTextInputValue('');    
    }
        
        return (
       
        <View style={Styles.Add}>
                <TextInput 
                style={Styles.AddText}
                value={textInputValue}  
                placeholderTextColor={'white'} 
                placeholder="Yapılacak.."
                onChangeText={(text) => setTextInputValue(text)}
                ></TextInput>
                
                
                <Button color={'#32373b'} title="Kaydet" onPress={todoEkle}></Button>
        </View>
  ) }
export default Add