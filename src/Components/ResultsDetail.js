import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';


const ResultsDetail = ({ result }) => {
    return(
        // <View style={styles.container}>
        //     <Image style={styles.imageStyle} source={{ uri: result.image_url}} />
        //     <Text>{result.name}</Text>
        //     <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        // </View>
        <Card>
            <View style={{flexDirection:'row'}}>
                    <Image style={styles.imageStyle} source={{ uri: result.image_url}}/>
                    <View style={{marginLeft:20, justifyContent:'space-around', }}>
                        <Text>{result.name}</Text>
                        <Text>{result.review_count} Reviews</Text>
                    </View>
                    <Text style={{borderWidth:1,padding:5,height:25,width:30,fontSize:10,borderRadius:5,borderColor:'rgb(132,173,35)',backgroundColor:'rgb(132,173,35)',marginLeft:'auto', color:'white',textAlign:'center'}}>{result.rating}</Text>
            </View>
            
        </Card>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'column'
    },
    imageStyle:{
        width:100,
        height:100,
        borderRadius:10,
    }, 
    name:{
        fontWeight:'bold',
        // fontSize:16
    }
});

export default ResultsDetail;
