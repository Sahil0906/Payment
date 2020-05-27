import React, {useState} from 'react';
import  {View,Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ViewMoreText from 'react-native-view-more-text';

const { width } = Dimensions.get('window');


const DisplayResultScreen = ({result, image}) => {

    const [value,setValue] = useState(0);

    const price = 250

    const renderViewMore = (onPress) => {
        return(
            <Text onPress={onPress} style={{fontWeight:'bold'}}>View more</Text>
          )
    }
    
    const renderViewLess = (onPress) => {
        return(
            <Text onPress={onPress} style={{fontWeight:'bold'}}>View less</Text>
        )
    }


    return (
        
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                <Image style={styles.image} source={{ uri: image}}/>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:15,fontWeight:'700'}}>{result.name}</Text>
                    <Text style={{color:'gray'}}>In Pizza</Text>
                
                    <Text><FontAwesome name='star' color='rgb(255, 204, 0)' size={15}/> {result.review_count}</Text>
                    <Text><FontAwesome name='rupee' size={15}/>{price}</Text>
                    <View style={{marginRight:150,paddingTop:10}}>
                    </View>
                </View>
                {value==0 ? 
                    <TouchableOpacity onPress={()=>{setValue(value+1)}}>
                        <View style={styles.add}>
                            <Text style={{textAlign:'center'}}>ADD </Text>
                            <AntDesign name='plus' color='red'/>
                        </View>   
                    </TouchableOpacity>
                :
                
                    <View style={styles.add2}>
                        <TouchableOpacity onPress={()=>{setValue(value-1)}}>
                            <View style={{width:30,height:30,alignItems:'center',paddingTop:7}}> 
                                <AntDesign name='minus' color='red'/>   
                            </View>
                
                        </TouchableOpacity>
                        <View style={{borderWidth:1,borderColor:'rgb(242, 219, 218)',width:30,backgroundColor:'rgb(242, 219, 218)',paddingTop:2}}>
                            <Text style={{textAlign:'center'}}>{value}</Text>
                        </View>
                        
                        <TouchableOpacity onPress={()=>{setValue(value+1)}}>
                            <View style={{width:30,height:30,alignItems:'center',paddingTop:7}}>
                                <AntDesign name='plus' color='red'/>    
                            </View>
                        </TouchableOpacity>
                        
                    </View>   
                }
                
                
                

                </View>
                <View style={{marginLeft:100, marginRight:10, paddingTop:10}}>
                    <ViewMoreText
                    numberOfLines={3}
                    renderViewMore={renderViewMore}
                    renderViewLess={renderViewLess}
                
                    >
                    <Text style={{color:'gray'}}>
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                    </Text>
                    </ViewMoreText>

                    </View>
                
            
            </View>

    )
}


const styles = StyleSheet.create({
    container:{
        width,
        flexDirection:'column',
        marginHorizontal:5,
        marginTop:10,
        marginBottom:20
    },
    image:{
        width:80,
        height:80,
        borderRadius:5,
        marginHorizontal:10
    },
    add:{
        borderColor:'rgb(161, 153, 153)',
        borderWidth:1.5,
        height:30,
        width:90,
        borderRadius:7,
        backgroundColor:'white',
        flexDirection:'row', 
        alignItems:'center',
       justifyContent:'center'
    },
    add2:{
        borderColor:'black',
        borderWidth:1,
        height:30,
        width:90,
        borderRadius:7,
        backgroundColor:'white',
        flexDirection:'row',
        
    }
});


export default DisplayResultScreen;