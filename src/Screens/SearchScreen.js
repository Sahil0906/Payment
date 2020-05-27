import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import SearchBarScreen from '../Components/SearchBar';
import yelp from '../api/yelp';
import ResultsList from '../Components/ResultsList';
import AddressBar from '../Components/AddressBar';
import RBSheet from "react-native-raw-bottom-sheet";
import LocationScreen from '../Components/Location';
import GooglePlacesInput from '../Components/GooglePlacesInput';
import CurrentLocation from '../Components/CurrentLocation';



const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('Pasta');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const [address,setAddress] = useState('Other - New Indira Colony Sikar')

    const refRBSheet = useRef();
    

    const searchApi = async (term) => {
        try{
            const response = await yelp.get('./search',{
                params:{
                    limit:50,
                    term : term,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        }catch(err){
            setErrorMessage('Something went wrong!!')
        }
    }

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    useEffect(() => {
        searchApi();
    },[])

    return (
        <>
            
            <AddressBar 
                address={address}
                onClick={()=>refRBSheet.current.open()}
            />
             
            <SearchBarScreen
                term = {term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective"
                    navigation = {navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier" 
                    navigation = {navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender" 
                    navigation = {navigation}
                />
            </ScrollView>
            
                <RBSheet
                    ref={refRBSheet}
                    height={550}
                    closeOnPressMask={true}
                    keyboardAvoidingViewEnabled={false}
                >
                <Text style={{marginHorizontal:15,marginTop:20,fontSize:17,fontWeight:'900'}}>Search location</Text>
                <GooglePlacesInput />
                <TouchableOpacity onPress={() => navigation.navigate('CurrentLocation')}>
                    <Text>Use Current location</Text>
                </TouchableOpacity>           
                
                </RBSheet>

        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;