
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, TextInput,ScrollView, SafeAreaView,StatusBar,Button,Alert,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import { FlatList } from 'react-native';
import {  } from 'react-native-image-slider-box';
import { ImageSlider } from "react-native-image-slider-banner";



function Login(props){
  const [sid,setusername] = useState('Yashaswi');
  const [password,setPassword] = useState('Password');
  


  return(
      <ScrollView style={styles.front}>
        <View style={styles.h1}>
        <Text style={{fontSize: 54,color:'#000000'}}>Login</Text>
        <TextInput style={styles.h2}
        placeholder='Username'
        placeholderTextColor={'#000000'}
        onChangeText={(val)=>setusername(val)}/>

        <TextInput style={styles.h2}
        // keyboardType='password'
        placeholder='Enter Password'
        placeholderTextColor={'#000000'}
        onChangeText={(val)=>setPassword(val)}/>

        <TouchableOpacity style={styles.loginbutton} onPress={()=>props.navigation.navigate('Bharat Mart')}>
        <Text style={{fontSize: 24,color:'#000000'}}>Submit</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>

      


  );
}
//Home Screen
function HomeScreen(props) {
  const images = [
    './assets/icon.png',
    './assets/download.jpg',
    './assets/images (1).jpeg',
  ];

  return (
    <ScrollView style={styles.Home}>
      <View style={styles.HomeView}>
      <View style={styles.Hometag}>
        <Text style={{fontSize:30, fontWeight:'bold', color:'#2F8D46'}}>Welcome to Bharat Mart app!</Text>
      </View>
      <View>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Offers</Text>
        <ImageSlider 
    data={[
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    autoPlay={false}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
/>
      </View>
      <View>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Discounts</Text>
        <ImageSlider 
    data={[
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    autoPlay={false}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
/>
      </View>
      <View style={styles.Button}>
      <TouchableOpacity style={styles.Mainbu} onPress={()=>props.navigation.navigate('Stores')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Search By Shop</Text></TouchableOpacity>
      <TouchableOpacity style={styles.Mainbu} onPress={()=>props.navigation.navigate('ItemView')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>View by Item</Text></TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
}

function Bharat_Mart(props){
  return(
      <ScrollView style={styles.login}>
        <TextInput style={styles.input}
        placeholder='Search Store'
        placeholderTextColor={'#000000'}/>
        <View style={styles.card1}>
          <Text style={{fontSize:40,margin:5}}> Bansal Grocery</Text>
          <Text style={{fontSize:15,margin:5}}> 1.5km away</Text>
          <Text style={{fontSize:15,margin:5}}> Address:344,abcd nagar,Chandigarh</Text>
          <TouchableOpacity style={styles.Main1} onPress={()=>props.navigation.navigate('ItemView')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>View Items</Text></TouchableOpacity>
        </View>
        <View style={styles.card2}>
        <Text style={{fontSize:40,margin:5}}> Family mart</Text>
        <Text style={{fontSize:15,margin:5}}> 1km away</Text>
        <Text style={{fontSize:15,margin:5}}> Address:344,abcd nagar,Chandigarh</Text>
          <TouchableOpacity style={styles.Main1} onPress={()=>props.navigation.navigate('ItemView')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>View Items</Text></TouchableOpacity>
        </View>
        <View style={styles.card3}>
        <Text style={{fontSize:40,margin:5}}> Mor</Text>
        <Text style={{fontSize:15,margin:5}}> 3km away</Text>
        <Text style={{fontSize:15,margin:5}}> Address:344,abcd nagar,Chandigarh</Text>
          <TouchableOpacity style={styles.Main1} onPress={()=>props.navigation.navigate('ItemView')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>View Items</Text></TouchableOpacity>
        </View>
        <View style={styles.card4}>
        <Text style={{fontSize:40,margin:5}}> Mohan Bakery</Text>
        <Text style={{fontSize:15,margin:5}}> Closed</Text>
        <Text style={{fontSize:15,margin:5}}> Address:344,abcd nagar,Chandigarh</Text>
          <TouchableOpacity style={styles.Main1} onPress={()=>props.navigation.navigate('ItemView')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>View Items</Text></TouchableOpacity>
        </View>
      </ScrollView>
  );
}

//ItemView for leave
function ItemView(props) {

    return (
        <ScrollView>
      <View style={styles.login2}>
          <TextInput style={styles.input}
        placeholder='Search Item'
        placeholderTextColor={'#000000'}/>
      <View style={styles.Item1}>
        <Text style={{fontSize:40,margin:5}}>Ashirwad Atta</Text>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Buy Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Add to Cart</Text></TouchableOpacity>
      </View>
      <View style={styles.Item1}>
        <Text style={{fontSize:40,margin:5}}>Milk</Text>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Buy Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Add to Cart</Text></TouchableOpacity>
      </View>
      <View style={styles.Item1}>
      <Text style={{fontSize:40,margin:5}}>Masoor ki Dal</Text>
      <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Buy Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Add to Cart</Text></TouchableOpacity>
      </View>
      <View style={styles.Item1}>
      <Text style={{fontSize:40,margin:5}}>Rice</Text>
      <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Buy Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Add to Cart</Text></TouchableOpacity>
      </View>
      <View style={styles.Item1}>
      <Text style={{fontSize:40,margin:5}}>Moong Dal</Text>
      <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Buy Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Add to Cart</Text></TouchableOpacity>
      </View>
      <View style={styles.Item1}>
      <Text style={{fontSize:40,margin:5}}>Arhar Dal</Text>
      <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Buy Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Add to Cart</Text></TouchableOpacity>
      </View>
      <View style={styles.Item1}>
        <Text style={{fontSize:40,margin:5}}>Butter</Text>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Buy Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Add to Cart</Text></TouchableOpacity>
      </View>
      <View style={styles.Item1}>
      <Text style={{fontSize:40,margin:5}}>Bislesri Bottle</Text>
      <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Buy Now</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Mains} onPress={()=>props.navigation.navigate('Item')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>Add to Cart</Text></TouchableOpacity>
      </View>
    </View>
      </ScrollView>
    );
  }
function Item(props){
  return(
    <ScrollView>
    <View style={styles.Itemcard}>
      <Text style={{fontSize:50}} >Ashirwad Atta</Text>
      <Image source={require('./assets/aashirvaad-CHAKKI-FRESH.jpg')} style={{height:400,width:300}}></Image>
      <Text style={{fontSize:30}}>Price: 200</Text>
      <Text style={{fontSize:30}}>Quantity: 5kg</Text>
      <Text style={{fontSize:20}}>Description: Whole Wheat Flour</Text>
      <TextInput style={styles.sid} 
        keyboardType='numeric'
        placeholder='Add Qty'
        placeholderTextColor={'#000000'}/>
      <TouchableOpacity style={styles.Mains} onPress={() => Alert.alert('Your Order has been Placed')}>
        <Text style={{fontSize: 24,color:'#D4ECDD'}}>Buy Now</Text></TouchableOpacity>
    </View>
    </ScrollView>
  );
}
//Navigation
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
        backgroundColor:'#fafaff',
      },
      headerTitleStyle:{
        fontWeight:'bold',
        fontSize:30,
        padding:50
      },
      headerTintColor:'#2F8D46'
        }} >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name="Bharat Mart" component={HomeScreen} />
          <Stack.Screen name='Stores' component={Bharat_Mart}/>
        <Stack.Screen name="ItemView" component={ItemView} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Style
const styles = StyleSheet.create({
  h2:{
    borderWidth:1,
    borderColor:'#000000',
    padding:8,
    margin:5,
    height:50,
    width:300,
    borderRadius:10

  },
  h1:{
    flex:1,
    backgroundColor:'#ffffff',
    alignContent:'center',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    margin:10,
    shadowColor:'black',
    elevation:10,
    shadowOpacity:5,
    borderWidth:0.5,
    borderColor:'#D4ECDD',
  },
  front:{
    flex:1,
    backgroundColor:'#ffffff',
    alignContent:'center',
    padding:2,
    
  },

  Button:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  sliderContainer: {
    // width:widths,
    height: 200, // Adjust the height as needed
  },
  image: {
    // width: widths,
    height: 200, // Adjust the height as needed
  },
  Home:{
    flex:1,
    backgroundColor:'#ffffff',
    alignContent:'center',
    padding:10
  },
  // HomeView:{
  //   flexDirection:'row',
  //   flexWrap:'wrap',
  // },
  Mainbu:{
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#D4ECDD',
    borderRadius:5,
    marginBottom:40,
    backgroundColor:'#4b49ac',
    height:70,
    width:180,
    margin:10
  },
  Hometag:{
    justifyContent:'center',
  },
  container: {
    flex:1,
    backgroundColor: '#152D35',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  container1: {
    flex:1,
    backgroundColor: '#152D35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    borderWidth:1,
    borderColor:'#000000',
    padding:8,
    margin:10,
    width:405,
    borderRadius:10,
  color:'#000000'},
  Main1:{
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#D4ECDD',
    borderRadius:5,
// margin: 100 ,
// marginBottom:40,
    marginTop:40,
    backgroundColor:'#4b49ac',
    width:320,
height:50,
shadowColor:'black',
elevation:10,
shadowOpacity:5,
borderWidth:0.5,
marginLeft:40,
},
Item1:{
  backgroundColor:'#ffffff',
  alignItems:'center',
  justifyContent:'center',
  borderWidth:1,
  borderColor:'#4b49ac',
  borderRadius:10,
  margin:5,
  height:250,
  width:200,
},
Mains:{
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#D4ECDD',
  borderRadius:10,
  backgroundColor:'#4b49ac',
  margin:5,
  height:35,
  borderWidth:1,
  shadowColor:'black',
elevation:10,
shadowOpacity:5,
width:150
},
  Main2:{
  justifyContent:'center',
  alignItems:'center',
  borderRadius:5,
margin: 20 ,
height:60,
    backgroundColor:'#152D35',
width:320,
shadowColor:'black',
elevation:10,
shadowOpacity:5,
borderWidth:0.5,
borderColor:'#D4ECDD',
},
  Itemcard:{
    flex:1,
    backgroundColor:'#ffffff',
    alignItems:'center',
    // justifyContent:'center',
    borderWidth:1,
    borderColor:'#4b49ac',
    borderRadius:10,
    margin:50,
    marginLeft:30,
    marginRight:30,
  },
  login:{
    flex:1,
    backgroundColor:'#fffaf0',
    borderWidth:1,
    borderColor:'#4b49ac',

  },
  login2:{
    flex:1,
    backgroundColor:'#fffaf0',
    borderWidth:1,
    borderColor:'#4b49ac',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  card1:{
    backgroundColor:'#ffffff',
    // alignItems:'center',
    // justifyContent:'center',
    borderWidth:1,
    borderColor:'#4b49ac',
    borderRadius:10,
    margin:5,
    height:250,
    width:400,
    margin:10
    // justifyContent:'space-around'

  },
  card2:{
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderColor:'#4b49ac',
    borderRadius:10,
    margin:5,
    height:250,
    width:400,
    margin:10
  },
  card3:{
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderColor:'#4b49ac',
    borderRadius:10,
    margin:5,
    height:250,
    width:400,
    marginRight:10,
    margin:10
  },
  card4:{
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderColor:'#4b49ac',
    borderRadius:10,
    margin:5,
    height:250,
    width:400,
    marginRight:10,
    margin:10
  },
  loginbutton:{
    borderWidth:2,
    borderColor:'#000000',
    borderRadius:10,
    margin:10,
    padding:10,
    justifyContent:'center', 
    alignItems:'center',
  }
  }
)

export default App;