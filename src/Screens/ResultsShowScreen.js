// import React, {useState, useEffect, useRef } from 'react';
// import { FlatList, Dimensions,View, StyleSheet,TouchableOpacity, Text, Button} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import CartScreen from './CartScreen';
// import yelp from '../api/yelp';
// import { Orders } from '../Orders';
// import {useFocusEffect } from '@react-navigation/native';

// import DisplayResultScreen from '../Components/DisplayResultScreen';
// import { ScrollView } from 'react-native-gesture-handler';

// const { width,height } = Dimensions.get('window');
// import RBSheet from "react-native-raw-bottom-sheet";



// const ResultsShowScreen = ({ navigation }) => {

//     const [result, setResult] = useState(null);

//     const [visible,setVisible] = useState(true);
//     const id = navigation.getParam('id');

//     const refRBSheet = useRef();
//     const total = 420
    

//     const getResult = async (id) => {
//         const response = await yelp.get(`/${id}`)
//         setResult(response.data);
//         console.log('result',result);
//     }

//    const handleOnPress = () => {
//         setVisible(true)
//    }

//    useFocusEffect(
//     React.useCallback(() => {
//       handleOnPress()
//     }));

//     useEffect(() => {
//         getResult(id)
   
//     },[]);

//     if (!result){
//         return null;
//     }
    
//     return(
//         <View style={{height:height, paddingBottom:50}}>
            
//             <ScrollView showsVerticalScrollIndicator={false}>
              
//               <FlatList 
//                   showsVerticalScrollIndicator={false}
//                   data={result.photos}
//                   keyExtractor={(photo) => photo}
//                   renderItem={({item}) => {
//                       return (
//                           <DisplayResultScreen result={result} image={item}/>

//                       )
//                  }}
//               />
//               <View style={{height:100}}>
//               </View>
     
//           </ScrollView>
//             <View style={styles.cart}>
//                 <TouchableOpacity onPress={()=>{
//                     handleOnPress()
//                     refRBSheet.current.open()
//                 }}>
//                     <View style={{borderWidth:1, margin:10,height:60,borderRadius:10,borderColor:'rgb(245, 108, 108)',backgroundColor:'rgb(245, 108, 108)', alignItems:'center'}}>
//                         <View style={{flexDirection:'row'}}>
//                             <Text style={{color:'white',marginTop:17,fontSize:18}}>View Cart </Text>
//                             <AntDesign name='caretright' style={{marginTop:22}} size={15} color='white'/>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
                
//             </View>
//             {visible ?  
//             <RBSheet
//                 height={550}
//                 ref={refRBSheet}
//                 closeOnPressMask={true}
//                 customStyles={{
                 
//                 }}
//             >
//             <View>
//                 <TouchableOpacity>
//                     <View style={{height:70,width,backgroundColor:'rgb(0, 145, 255)'}}>
                    
//                         <View style={{marginLeft:15,marginTop:15}}>
//                             <Text style={{color:'white', fontSize:10,marginBottom:5}}>DELIVERY AT</Text>
//                             <View style={{flexDirection:'row'}}>
//                                 <MaterialCommunityIcons name='checkbox-marked-circle' color='white' size={17}/>
//                                 <Text style={{color:'white',width:width-100,paddingLeft:10}} numberOfLines={1}>Other (near Choudhary hostel, Near Indira Colony Sikar)</Text>
//                                 <Text style={{color:'white',paddingLeft:10,fontSize:12}}>CHANGE</Text>
//                             </View>

//                         </View>
//                     </View>
//                 </TouchableOpacity>
//                 <ScrollView showsVerticalScrollIndicator={false}>
//                     <FlatList 
//                         showsVerticalScrollIndicator={false}
//                         data={Orders}
//                         keyExtractor={(order) => order.name}
//                         renderItem={({item}) => {
//                             return (
//                                 <CartScreen result={item}/>
//                             )
//                         }}
//                     />
//                     <View style={{height:200}}>
//                     </View>
//                 </ScrollView>
//                 <View style={{position:'absolute',bottom:70, height:70,width:width, backgroundColor:'white'}}>
//                     <TouchableOpacity 
//                         style={{width:200, height:50,marginTop:10,marginLeft:'auto',marginRight:10,borderRadius:5,flexDirection:'row',backgroundColor:'rgb(171, 27, 27)'}}
//                         onPress={() => {
//                             setVisible(false)
//                             navigation.navigate('CardPayment')}
//                         }>
//                         <View style={{marginLeft:10,marginTop:5}}>
//                             <Text style={{color:'white'}}>Rs. {total}</Text>
//                             <Text style={{fontSize:10,color:'white'}}>TOTAL</Text>
//                         </View>
//                         <View style={{marginLeft:30,flexDirection:'row',marginTop:12}}>
//                             <Text style={{fontSize:15,color:'white'}}>Place Order </Text>
//                             <AntDesign name='caretright' style={{paddingTop:5}} size={12} color='white'/>
//                         </View>
//                     </TouchableOpacity>

//                 </View>
                
//             </View>
//             </RBSheet>
                
//             : null}

          
          
//         </View>
            

//     );
// };

// const styles = StyleSheet.create({
//     cart:{
//         width:width,
//         height:80,
//         position:"absolute",
//         backgroundColor:'rgb(250, 247, 245)',
//         bottom:70
//     }
// })


// export default ResultsShowScreen;


import React, {useState, useEffect, useRef } from 'react';
import { FlatList, Dimensions,View, AsyncStorage, StyleSheet,TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartScreen from './CartScreen';
import yelp from '../api/yelp';
import { Orders } from '../Orders';
import { NavigationEvents } from 'react-navigation';


import DisplayResultScreen from '../Components/DisplayResultScreen';
import { ScrollView } from 'react-native-gesture-handler';

const { width,height } = Dimensions.get('window');
import RBSheet from "react-native-raw-bottom-sheet";
import { NavigationContainer } from '@react-navigation/native';
import { set } from 'react-native-reanimated';



const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    const [visible,setVisible] = useState(true);
    const total = 420

    const refRBSheet = useRef();
    

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
        console.log('result',result);
    }

   
    const handleOnPress = () => {
        setVisible(true)
    }

    useEffect(() => {
        getResult(id)
   
    },[]);

    if (!result){
        return null;
    }
    
    return(
        <View style={{height:height, paddingBottom:50}} >
            <ScrollView showsVerticalScrollIndicator={false}>
            <NavigationEvents 
                    onWillBlur={handleOnPress}
            />
              <FlatList 
                  showsVerticalScrollIndicator={false}
                  data={result.photos}
                  keyExtractor={(photo) => photo}
                  renderItem={({item}) => {
                      return (
                          <DisplayResultScreen result={result} image={item}/>

                      )
                 }}
              />
              <View style={{height:100}}>
              </View>
     
          </ScrollView>
            <View style={styles.cart}>
                <TouchableOpacity onPress={()=>refRBSheet.current.open()}>
                    <View style={{borderWidth:1, margin:10,height:60,borderRadius:10,borderColor:'rgb(245, 108, 108)',backgroundColor:'rgb(245, 108, 108)', alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white',marginTop:17,fontSize:18}}>View Cart </Text>
                            <AntDesign name='caretright' style={{marginTop:22}} size={15} color='white'/>
                        </View>
                    </View>
                </TouchableOpacity>
                
            </View>
            {visible ?  
            <RBSheet
                height={550}
                ref={refRBSheet}
                closeOnPressMask={true}
                customStyles={{
                 
                }}
            >
            <View>
                <TouchableOpacity>
                    <View style={{height:70,width,backgroundColor:'rgb(0, 145, 255)'}}>
                    
                        <View style={{marginLeft:15,marginTop:15}}>
                            <Text style={{color:'white', fontSize:10,marginBottom:5}}>DELIVERY AT</Text>
                            <View style={{flexDirection:'row'}}>
                                <MaterialCommunityIcons name='checkbox-marked-circle' color='white' size={17}/>
                                <Text style={{color:'white',width:width-100,paddingLeft:10}} numberOfLines={1}>Other (near Choudhary hostel, Near Indira Colony Sikar)</Text>
                                <Text style={{color:'white',paddingLeft:10,fontSize:12}}>CHANGE</Text>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlatList 
                        showsVerticalScrollIndicator={false}
                        data={Orders}
                        keyExtractor={(order) => order.name}
                        renderItem={({item}) => {
                            return (
                                <CartScreen result={item}/>
                            )
                        }}
                    />
                    <View style={{height:200}}>
                    </View>
                </ScrollView>
                <View style={{position:'absolute',bottom:70, height:70,width:width, backgroundColor:'white'}}>
                    <TouchableOpacity 
                        style={{width:200, height:50,marginTop:10,marginLeft:'auto',marginRight:10,borderRadius:5,flexDirection:'row',backgroundColor:'rgb(171, 27, 27)'}}
                        onPress={() => {
                            setVisible(false)
                            navigation.navigate('CardPayment')}
                        }>
                        <View style={{marginLeft:10,marginTop:5}}>
                            <Text style={{color:'white'}}>Rs. {total}</Text>
                            <Text style={{fontSize:10,color:'white'}}>TOTAL</Text>
                        </View>
                        <View style={{marginLeft:30,flexDirection:'row',marginTop:12}}>
                            <Text style={{fontSize:15,color:'white'}}>Place Order </Text>
                            <AntDesign name='caretright' style={{paddingTop:5}} size={12} color='white'/>
                        </View>
                    </TouchableOpacity>

                </View>
                
            </View>
            </RBSheet>
                
            : null}
          
          
        </View>
            

    );
};

const styles = StyleSheet.create({
    cart:{
        width:width,
        height:80,
        position:"absolute",
        backgroundColor:'rgb(250, 247, 245)',
        bottom:70
    }
})


export default ResultsShowScreen;