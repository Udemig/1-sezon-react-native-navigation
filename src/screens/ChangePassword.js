import React from "react";

import { SafeAreaView,View,Text,Button } from "react-native";

import Header from "../components/header";

const ChangePassword=({navigation,route})=>{
    return(
        <SafeAreaView>
            <Header title={"Şifre Değiştir"} />
            <View>
                <Text>Şifre Değiştir</Text>
            </View>
        </SafeAreaView>
    )
}

export default ChangePassword