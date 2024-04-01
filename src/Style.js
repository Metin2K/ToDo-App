
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    Header:{
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
    },
    Screen:{
        backgroundColor:"#101820",
        flex:1,
    },
    HeaderText:{
        color: "#FEE715",
        fontSize: 30,
        padding: 10,
        fontWeight: "bold",
        
    },
    Add:{
        flex: 1,
        justifyContent: 'flex-end',
        margin: 20,
        marginBottom: 0,
        position:'absolute',
        width: '90%',
        bottom: 0,
        backgroundColor:'#101820',
    
    },
    AddText:{
        borderBottomWidth: 1,
        borderBottomColor:'white',
        color: 'white',
        backgroundColor: '#101820',
        marginBottom: 10,
        
    },
    List:{
        color: 'white',
        padding: 10,
        margin: 20,
    },
    ListeEleman:{
        color : '#101820',
        fontSize: 15,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FEE715',
        borderRadius: 10,
    },
    Container:{
        flex: 1,
    },
    selectedItem: {
        textDecorationLine: 'line-through',
      }
});