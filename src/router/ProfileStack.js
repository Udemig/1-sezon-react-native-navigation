import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screens/Profile";
import ChangePassword from "../screens/ChangePassword";

const Stack=createStackNavigator()

const ProfileStack=()=>{
    return(
        <Stack.Navigator initialRouteName="Profile" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
    )
}

export default ProfileStack