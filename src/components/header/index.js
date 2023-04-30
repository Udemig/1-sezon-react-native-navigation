import React from "react";

import { View,Text,StyleSheet } from "react-native";

const Header=({title})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        width: '100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    title: {
        color: '#fff',
        fontSize:20,
        fontWeight:'bold'
    }
})

export default Header