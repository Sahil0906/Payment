// import React from 'react';
// import { View, Text,PermissionsAndroid } from 'react-native';

// import Geolocation from '@react-native-community/geolocation';
// Geolocation.setRNConfiguration(config);

// // async function requestLocationPermission() {
// //     try {
// //       const granted = await PermissionsAndroid.request(
// //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
// //         {
// //           'title': 'Location Permission',
// //           'message': 'This App needs access to your location ' +
// //                      'so we can know where you are.'
// //         }
// //       )
// //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
// //         console.warn("You can use locations ")
// //       } else {
// //         console.warn("Location permission denied")
// //       }
// //     } catch (err) {
// //       console.warn(err)
// //     }
// //   }

// const Location = () => {
//     Geolocation.getCurrentPosition(info => console.log(info));
//     return (
//         <View>

//         </View>
//     )
// }

// export default Location;

import React, { Component } from 'react'
import { Text, Alert, TouchableOpacity } from 'react-native'
navigator.geolocation = require('@react-native-community/geolocation');


class Location extends Component {
    state = {
        location: null
    }

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);
                console.warn(location);
                this.setState({ location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy:true, timeout:20000, maximumAge:1000}
        )
    }

    render() {
        return(
            <TouchableOpacity onPress={this.findCoordinates}>
                <Text>Find coordinates?</Text>
                <Text>{this.state.location}</Text>
            </TouchableOpacity>
        )
    }
}


export default Location;