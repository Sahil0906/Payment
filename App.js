import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigation from './src/navigations/AppNavigation';

const App = createAppContainer(AppNavigation);

export default App;

// In App.js in a new project


// import * as React from 'react';
// import AppNavigation from "./src/navigations/AppNavigation";

// // import {
// //   createDrawerNavigator,
// //   DrawerContentScrollView,
// //   DrawerItemList,
// //   DrawerItem,
// // } from '@react-navigation/drawer';

// // function Feed({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Feed Screen</Text>
// //       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
// //       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
// //     </View>
// //   );
// // }

// // function Notifications() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Notifications Screen</Text>
// //     </View>
// //   );
// // }

// // function CustomDrawerContent(props) {
// //   return (
// //     <DrawerContentScrollView {...props}>
// //       <DrawerItemList {...props} />
// //       <DrawerItem
// //         label="Close drawer"
// //         onPress={() => props.navigation.closeDrawer()}
// //       />
// //       <DrawerItem
// //         label="Toggle drawer"
// //         onPress={() => props.navigation.toggleDrawer()}
// //       />
// //     </DrawerContentScrollView>
// //   );
// // }

// // const Drawer = createDrawerNavigator();

// // function MyDrawer() {
// //   return (
// //     <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
// //       <Drawer.Screen name="Feed" component={Feed} />
// //       <Drawer.Screen name="Notifications" component={Notifications} />
// //     </Drawer.Navigator>
// //   );
// // }

// export default function App() {
//   return (
//     <AppNavigation />
//   );
// }




