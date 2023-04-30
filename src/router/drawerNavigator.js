import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerHome from "../screens/drawerScreens/DrawerHome";
import DrawerCategories from "../screens/drawerScreens/DrawerCategories";

const Drawer=createDrawerNavigator()

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="DrawerHome" component={DrawerHome} />
            <Drawer.Screen name="DrawerCategories" component={DrawerCategories} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator