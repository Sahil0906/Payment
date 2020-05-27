import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');

const GooglePlacesInput = () => {
    const [value,setValue] = useState('');
  return (
      
        <GooglePlacesAutocomplete
            placeholder='Search for your location...'
            fetchDetails={true}
            onPress={(data, details = null) => {
                setValue(data);
            }}
            query={{
                key: 'AIzaSyC7KjGTtBvCWHwD72XxuXkiiHs1zUzDqpU',
                language: 'en'
            }}
            styles={{
                textInputContainer: {
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderTopWidth: 0,
                  borderBottomWidth:0,
                  marginHorizontal:10
                },
                textInput: {
                  marginLeft: 0,
                  marginRight: 0,
                  height: 45,
                  color: '#5d5d5d',
                  fontSize: 16,
                  borderWidth:1,
                  borderColor:'rgb(245, 245, 245)',
                  shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                },
                predefinedPlacesDescription: {
                  color: '#1faadb'
                },
              }}
              value={value}
        />
      
  );
};

export default GooglePlacesInput;