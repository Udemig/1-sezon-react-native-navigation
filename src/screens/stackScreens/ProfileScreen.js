import React from "react";

import { View,Text,Button } from "react-native";
import StackMenu from "../../components/stackMenu";

import { generalStyles } from "../../utils/generalStyles";

const ProfileScreen=({navigation,route})=>{
    return(
        <View style={generalStyles.body}>
            <Text>Stack Profile Screen</Text>
            <StackMenu navigation={navigation} />
        </View>
    )
}

export default ProfileScreen