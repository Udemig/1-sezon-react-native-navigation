import React from "react";

import { View,Text,Button } from "react-native";


import { generalStyles } from "../../utils/generalStyles";

const DrawerHome=({navigation,route})=>{
    return(
        <View style={generalStyles.body}>
            <Text>Drawer Home Screen</Text>
        </View>
    )
}

export default DrawerHome