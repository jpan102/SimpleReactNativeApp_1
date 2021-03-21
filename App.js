import React,{useState, useEffect} from "react";
import {View,Text,TextInput,Table,StyleSheet, Button,ImageBackground, Image,TouchableOpacity,TouchableHighlight, Linking} from "react-native";
import exStyle from './style/exStyle';



export default function App(){
  const [fname, setFn] = useState('');
    const [lname, setln] = useState('');
    const [age, setAge] = useState();
    const setName = (fntxt) => {
      setFn(fntxt); 
    }
    const setLName = (lntxt) => {
      setln(lntxt); 
    }
    const setAgen = (agenum) => {
      setAge(agenum); 
    }
    const sub = () =>{
      if(fname == null || lname == null || age == null){
        alert('Input Needed!!')
      }
      else{
      alert('Hi! '+fname+' '+ lname +'\nYou are '+ age );
      setFn(null);
      setln(null);
      setAge(null);
      }
    }
return(
  <View>
  {/* <ImageBackground source={require('./assets/bckimg.png')}></ImageBackground> */}
 <View style={exStyle.mainV}>

<Image style={exStyle.wel} source={require('./assets/wel.png')} /> 

<View style={exStyle.view1}>


  
 
  <TextInput style={exStyle.fnln} onChangeText={setName} value={fname} placeholder='Enter Firstname'/>
  <TextInput style={exStyle.fnln2} onChangeText={setLName} value={lname} placeholder='Enter Lastname'/>
  <TextInput style={exStyle.age} keyboardType='numeric' onChangeText={setAgen} value={age} placeholder='Age' />

  <TouchableOpacity onPress={sub} style={exStyle.appButtonContainer}>
    <Text style={exStyle.appButtonText}>Submit</Text>
  </TouchableOpacity>

  <Text style={exStyle.btn1}></Text>
  
</View>

<View style={exStyle.logo}>
<TouchableHighlight onPress={() => Linking.openURL('https://www.instagram.com/ddyanpol/')}>
<Image style={exStyle.insta} source={require('./assets/insta.png')} />
</TouchableHighlight>
<TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com/nofuente/')}>
<Image style={exStyle.fb} source={require('./assets/fb.png')} />
</TouchableHighlight>
</View>

</View>

</View>
);
    
}