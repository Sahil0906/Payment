import React from "react";
import { Animated, Easing, Image, StyleSheet, Dimensions } from "react-native";

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation'

import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import SideBar from "../Components/SideBar";
import ProfileScreen from '../Screens/ProfileScreen';
import SearchScreen from '../Screens/SearchScreen';
import ResultsShowScreen from '../Screens/ResultsShowScreen';
import CartScreen from '../Screens/CartScreen';
import GooglePlacesInput from '../Components/GooglePlacesInput';
import CurrentLocation from '../Components/CurrentLocation';
import CardPayment from "../Components/CardPayment";


const AppNavigation = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Welcome: SearchScreen,
    Login: LoginScreen,
    Signup: SignupScreen
  }),
  mainflow: createDrawerNavigator({
      searchflow: createStackNavigator({
        Search:SearchScreen,
        ResultsShow:ResultsShowScreen,
        Cart:CartScreen,
        CurrentLocation:CurrentLocation,
        CardPayment:CardPayment
      }),

      Profile: {
        screen:ProfileScreen,
        navigationOptions:{
          title:"Profile",
  
        }
      },
    
    },{
        contentComponent: props => <SideBar {...props} />,
    
      drawerWidth: Dimensions.get("window").width*0.95,
      hideStatusBar:true,
    
      contentOptions: {
        activeBackgroundColor: "rgba(212,118,207,0.2)",
        activeTinColor: "#531158",
        itemsContainerStyle: {
          marginTop: 16,
          marginHorizontal: 8
        }, 
        itemStyle: {
          borderRadius: 4
        }
      }
    
    })
});

export default AppNavigation;

// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
// import { NavigationContainer } from "@react-navigation/native";

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//       {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// function loginflow() {
//     return(
//         <Stack.Navigator initialRouteName="Home">
//             <Stack.Screen name="Welcome" component={WelcomeScreen} />
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Signup" component={SignupScreen} />
//             <Stack.Screen name="mainflow" component={mainflow} options={{
//                 headerShown:false
//             }}/>

//         </Stack.Navigator>
//     )
// }


// function searchflow() {
//     return(
//         <Stack.Navigator initialRouteName="Search">
//             <Stack.Screen name="Search" component={SearchScreen} />
//             <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
//             <Stack.Screen name="Cart" component={CartScreen} />
//             <Stack.Screen name="CurrentLocation" component={CurrentLocation} />
//             <Stack.Screen name="CardPayment" component={CardPayment} />
//         </Stack.Navigator>
//     )
// }

// function mainflow() {
//   return (
//     <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
//     <Drawer.Screen name="Search" component={searchflow}/>
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//       <Drawer.Screen name="Notifications" component={Notifications} />
//     </Drawer.Navigator>
//   );
// }



// const AppNavigation = () => {
//     return (
//         <NavigationContainer>
//             {loginflow()}
//         </NavigationContainer>
//     )
// }



// export default AppNavigation;


