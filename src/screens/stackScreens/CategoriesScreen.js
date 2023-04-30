import React from "react";

import { View,Text,Button } from "react-native";
import StackMenu from "../../components/stackMenu";

import { generalStyles } from "../../utils/generalStyles";

const CatgeoriesScreen=({navigation,route})=>{
    return(
        <View style={generalStyles.body}>
            <Text>Stack Categories Screen</Text>
            <StackMenu navigation={navigation} />
        </View>
    )
}

export default CatgeoriesScreen