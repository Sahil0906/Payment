import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert,Dimensions, ActivityIndicator } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

const {width,height} = Dimensions.get('window');

const CurrentLocation = () => {
    const [latitude,setLatitude] = useState(null)
    const [longitude,setLongitude] = useState(null)
    const [err,setErr] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            setErr(null)
        }, error => {
            setErr(error.message);
            Alert.alert(error.message);
        
        },
        {
            enableHighAccuracy:true,
            timeout:20000
        });
    },[])

    if(!latitude && !longitude){
        return <View><ActivityIndicator size={50} style={{paddingTop:250}}/></View>
    }

    return (
        <View style={styles.container}>
            {/* <MapView 
                style={styles.map}
                showsUserLocation={true}
                initialRegion={{
                    latitude,
                    longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
            >
                <Marker coordinate={{latitude,longitude}}
                title={"Your Location"}
                draggable/>
            </MapView> */}
           
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
       
    },
    map:{
        height,
        width
    }
})

export default CurrentLocation;
