
import {SafeAreaView, View, Button, Text, TextInput} from "react-native";
import Styles from "./Style.js"
import Add from "./components/Add.js";
import React, { useState } from "react"
import Header from "./components/Header.js"
import Container from "./components/Container.js";

function App() {
    const [textInputValue, setTextInputValue] = useState('');
    const [number, setNumber] = useState(3);
    const [data, setData] = useState([
        { id: '1', text: 'Ev temizlenecek' },
        { id: '2', text: 'Yemek Yapılacak' },
        { id: '3', text: 'Proje tamamlanacak' },
      ]);
  return (
    <SafeAreaView style={Styles.Screen}>
                 {/* Header  */}
       <Header number={number} setNumber={setNumber} />
                  {/* Content */}
        <Container data={data} setData={setData} number={number} setNumber={setNumber} />

              {/* Add */}
        <Add number={number} setNumber={setNumber} textInputValue={textInputValue} setTextInputValue={setTextInputValue} data={data} setData={setData} />
    </SafeAreaView>  
    )
}

export default App