import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';


const CartScreen = ({result}) => {

    const [value,setValue] = useState(result.quantity);

    const decreament = () => {
        if(value==0){
            setValue(0)
        }else{
            setValue(value-1)
        }
    }

    return (
        <View style={{flexDirection:'row'}}>
            <View style={{marginLeft:20,marginVertical:10}}>
                <Text style={{fontWeight:'900',paddingBottom:5}}>{result.name}</Text>
                <Text style={{paddingBottom:5}}><FontAwesome name='rupee' size={15}/>{result.price}</Text>
                <Text style={{color:'gray',paddingBottom:5}}>Crust: {result.Crust}</Text>
                <Text style={{color:'gray',paddingBottom:5}}>Size: {result.size}</Text>
            </View>
            <View style={{marginTop:20,marginLeft:'auto',marginRight:20}}>
                <View style={styles.add}>
                    <TouchableOpacity onPress={()=>decreament()}>
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
                <View>
                    <Text style={{paddingLeft:50}}><FontAwesome name='rupee' size={15}/>{result.total_price}</Text>
                </View>  
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    add:{
        borderColor:'black',
        borderWidth:1,
        height:30,
        width:90,
        borderRadius:7,
        backgroundColor:'white',
        flexDirection:'row'
    }
})

export default CartScreen;