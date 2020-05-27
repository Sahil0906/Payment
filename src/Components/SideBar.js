import React from "react";
import { StyleSheet, View, ScrollView, ImageBackground,Image, Text } from "react-native";
import { DrawerNavigatorItems } from 'react-navigation-drawer';

export default SideBar = props => (
  <ScrollView>
      <ImageBackground 
          source={require('../../assets/image.png')} 
          style={{width:undefined, padding:16, paddingTop:40}}>

          <Image source={require('../../assets/profile.png')} style={styles.profile} />
          <Text style={styles.name}>Sahil</Text>

          <View style={{ flexDirection: "row"}}>
              <Text style={styles.followers}>734 followers</Text>
              {/* <Ionicons name="md-people" size={16} color="rgba(255,255,255, 0.8)"></Ionicons> */}
          </View>
      </ImageBackground>
      <View style={styles.container}>
          <DrawerNavigatorItems {...props} />
      </View>
  </ScrollView>
);


const styles = StyleSheet.create({
  container:{
      flex:1
  },
  profile:{
      width: 80,
      height: 80,
      borderRadius:40,
      borderWidth:3,
      borderColor:"#FFF"
  },
  name:{
      color:"#FFF",
      fontSize: 15,
      fontWeight: "800",
      marginVertical: 8
  },
  followers:{
      color:"rgba(255,255,255,0.8)",
      fontSize:13,
      marginRight:4
  }
});