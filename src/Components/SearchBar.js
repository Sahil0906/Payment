import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';



const SearchBarScreen = ({ term, onTermChange, onTermSubmit }) => {
    const [value, setValue] = useState('');

    return (
        <SearchBar 
            platform='android'
            onChangeText={setValue}
            value={value}
            containerStyle={{backgroundColor: 'white',borderColor:'white', borderWidth: 1, borderRadius: 10, margin:5, height:60,}}
            inputStyle={{backgroundColor: 'white'}}
            placeholder="Search for restaurants" 
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            value={term}
        />
    );
};


export default SearchBarScreen;