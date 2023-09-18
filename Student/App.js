
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, TextInput,ScrollView, SafeAreaView,StatusBar,Button,Alert,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Grid } from "react-native-grid-component";

//Home Screen
function HomeScreen(props) {
  return (
    <View style={styles.container} >
      <View style={styles.Idcard} >
        <Text style={{fontSize: 24,color:'#D4ECDD'}}>Yashaswi Khurana</Text>
        <Text style={{fontSize: 24,color:'#D4ECDD'}}>22106023</Text>
        <Text style={{fontSize: 24,color:'#D4ECDD'}}>Data-Science</Text>
        <Text style={{fontSize: 24,color:'#D4ECDD'}}>R.no: 21</Text>
        <Text style={{fontSize: 24,color:'#D4ECDD'}}>7719417331</Text>
      </View>
      <TouchableOpacity style={styles.Main1} onPress={()=>props.navigation.navigate('Form')}>
        <Text style={{fontSize: 24,color:'#D4ECDD'}}>Fill The Form</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Main2} onPress={()=>props.navigation.navigate('Form')}>
        <Text style={{fontSize: 24,color:'#D4ECDD'}}>Check Approved forms</Text>
      </TouchableOpacity>

      </View>
  );
}

function Bharat_Mart(props){
  const [sid,setsid] = useState('22106023');
  const [password,setPassword] = useState('Password');
  return(
      <ScrollView style={styles.login}>
        <View style={styles.card1}>
          <Text style={{fontSize:40,margin:5}}> Bansal Grocery</Text>
          <Text style={{fontSize:15,margin:5}}> 1.5km away</Text>
          <Text style={{fontSize:15,margin:5}}> Address:344,abcd nagar,Chandigarh</Text>
          <TouchableOpacity style={styles.Main1} onPress={()=>props.navigation.navigate('Form')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>View Items</Text></TouchableOpacity>
        </View>
        <View style={styles.card2}>
        <Text style={{fontSize:40,margin:5}}> Family mart</Text>
        <Text style={{fontSize:15,margin:5}}> 1km away</Text>
        <Text style={{fontSize:15,margin:5}}> Address:344,abcd nagar,Chandigarh</Text>
          <TouchableOpacity style={styles.Main1} onPress={()=>props.navigation.navigate('Form')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>View Items</Text></TouchableOpacity>
        </View>
        <View style={styles.card3}>
        <Text style={{fontSize:40,margin:5}}> Mor</Text>
        <Text style={{fontSize:15,margin:5}}> 3km away</Text>
        <Text style={{fontSize:15,margin:5}}> Address:344,abcd nagar,Chandigarh</Text>
          <TouchableOpacity style={styles.Main1} onPress={()=>props.navigation.navigate('Form')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>View Items</Text></TouchableOpacity>
        </View>
        <View style={styles.card4}>
        <Text style={{fontSize:40,margin:5}}> Mohan Bakery</Text>
        <Text style={{fontSize:15,margin:5}}> Closed</Text>
        <Text style={{fontSize:15,margin:5}}> Address:344,abcd nagar,Chandigarh</Text>
          <TouchableOpacity style={styles.Main1} onPress={()=>props.navigation.navigate('Form')}><Text style={{fontSize: 24,color:'#D4ECDD'}}>View Items</Text></TouchableOpacity>
        </View>
      </ScrollView>
      


  );
}

//Form for leave
function Form() {
  const [name,setName] = useState('Yashaswi');
  const [sid,setsid] = useState('22106023');
  const [branch,setbranch] = useState('Data-Science');
  const [room_number,setrn] = useState('21');
  const [mobile_number,setmn] = useState('7719417331');
  const [Pec_mail_id,setpmi] = useState('yashaswikhurana.bt22cseds@pec.edu.in');
  const [Reason,setreason] = useState('Going home');
  const [AVP,setavp] = useState('AVP');
  const [PMN,setpmn] = useState('9815494849');
  const [Date,setdate] = useState('dd/mm/yyyy');
  const [password,setPassword] = useState('Password');


    return (
      <SafeAreaView style={styles.container1}>
        <ScrollView style={styles.ScrollView}>
        <TextInput style={styles.input}
        placeholder='Enter Name'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val)=>setName(val)}/>

        <TextInput style={styles.sid} 
        keyboardType='numeric'
        placeholder='Student id'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val2)=>setsid(val2)}/>

        <TextInput style={styles.input}
        placeholder='Branch'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val3)=>setbranch(val3)}/>

        <TextInput style={styles.input}
        placeholder='Room number'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val4)=>setrn(val4)}/>

        <TextInput style={styles.input}
        placeholder='Mobile number'
        keyboardType='numeric'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val5)=>setmn(val5)}/>

        <TextInput style={styles.input}
        placeholder='Pec mail-id'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val6)=>setpmi(val6)}/>

        <TextInput style={styles.reason}
        placeholder='Reason'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val7)=>setreason(val7)}/>

        <TextInput style={styles.input}
        placeholder='Address of visiting place'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val8)=>setavp(val8)}/>

        <TextInput style={styles.input}
        placeholder='Parents Mobile number'
        keyboardType='numeric'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val9)=>setpmn(val9)}/>

        <TextInput style={styles.input}
        placeholder='Date'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val10)=>setdate(val10)}/>

        <TextInput style={styles.input}
        placeholder='Password'
        placeholderTextColor={'#D4ECDD'}
        onChangeText={(val)=>setPassword(val)}/>
        <View style={styles.fixToText}>
          <TouchableOpacity style={{
            justifyContent:'center',
            alignItems:'center',
            borderWidth:0.5,
            borderColor:'#D4ECDD',
            marginBottom:10,
            padding:8,
            borderRadius:5,
          }} onPress={() => Alert.alert('Your form has been submitted and is under process')}>
        <Text style={{fontSize: 25,color:'#D4ECDD'}}>Submit</Text>
      </TouchableOpacity>
        </View>
        
        </ScrollView>
      </SafeAreaView>
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
          <Stack.Screen name='Bharat Mart' component={Bharat_Mart}/>
        <Stack.Screen name="Dormsavior" component={HomeScreen}/>
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Style
const styles = StyleSheet.create({
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
    borderColor:'#D4ECDD',
    padding:8,
    margin:10,
    width:300,
    borderRadius:10,
  color:'#D4ECDD'},
  reason : {
    borderWidth:1,
    borderColor:'#D4ECDD',
    padding:8,
    margin:10,
    width:300,
    borderRadius:10,
    color:'#D4ECDD'
  },
    sid : {
    borderWidth:1,
    borderColor:'#D4ECDD',
    padding:8,
    margin:10,
    width:300,
    borderRadius:10,
    color:'#D4ECDD'
  },
  fixToText:{
    width: 90,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 110,
  },
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
  Idcard:{
    backgroundColor:'#152D35',
    width:320,
    height:170,
    borderRadius:20,
    margin:10,
    // justifyContent:'center',
    borderColor:'#D4ECDD',
    // alignItems:'center',
    shadowColor:'black',
elevation:10,
shadowOpacity:5,
borderWidth:0.5,
padding:10
  },
  login:{
    flex:1,
    backgroundColor:'#fffaf0',
    borderWidth:1,
    borderColor:'#4b49ac',
    borderRadius:10,
    margin:5,
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
  },
  card3:{
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderColor:'#4b49ac',
    borderRadius:10,
    margin:5,
    height:250,
    width:400,
    marginRight:10
  },
  card4:{
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderColor:'#4b49ac',
    borderRadius:10,
    margin:5,
    height:250,
    width:400,
    marginRight:10
  },
  loginbutton:{
    borderWidth:2,
    borderColor:'#D4ECDD',
    borderRadius:10,
    margin:10,
    padding:10,
  }
  }
)

export default App;