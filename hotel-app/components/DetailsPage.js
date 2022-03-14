import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RadioButton } from 'react-native-paper';
import { firebase } from './Firebase/Config';
import CompletePage from './CompletePage'




class DetailsPage extends React.Component <Props> {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname:'',
      email: '',
      phone: '',
      password: '',
    };
  }
  submit() {
    console.warn(this.state);
  }

  render() {
    return (
      <View style={[styles.container, styles.shadowProp]}>
        <View>
          <Text style={{marginTop: -160, fontSize: 18, color: "#0E4C92", marginLeft: 20, fontWeight: 700,}}>Please enter your details below!</Text>
        </View> 

      <View style={{ margin: 20, marginTop: -150 }}>
        <TextInput
          placeholder="Enter First Name"
          onChangeText={(text) => {
            this.setState({ firstname: text });
          }}
          style={{ borderWidth: 2, borderColor: '#0E4C92', width: 230, height: 40, borderRadius: 10, marginTop: 80, marginLeft: 10, paddingLeft: 8, }}
        />


        <TextInput
          placeholder="Enter Last Name"
          onChangeText={(text) => {
            this.setState({ lastname: text });
          }}
          style={{ borderWidth: 2, borderColor: '#0E4C92', width: 230, height: 40, borderRadius: 10, marginTop: 30, marginLeft: 10, paddingLeft: 8, }}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          style={{ borderWidth: 2, borderColor: '#0E4C92', width: 230, height: 40, borderRadius: 8, marginTop: 30, marginLeft: 10, paddingLeft: 10, }}
        />
        <TextInput
          placeholder="Enter Phone"
          onChangeText={(text) => {
            this.setState({ phone: text });
          }}
          style={{ borderWidth: 2, borderColor: '#0E4C92', width: 230, height: 40, borderRadius: 10,marginTop: 30, marginLeft: 10, paddingLeft: 8,}}
        />
        <TextInput
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          style={{ borderWidth: 2, borderColor: '#0E4C92', width: 230, height: 40, borderRadius: 10, marginTop: 30, marginLeft: 10, paddingLeft: 8, }}
        />
        <View style={styles.buttonContainer}>

        <TouchableOpacity onPress={() => {
            this.submit(); 
         }}
         style={{backgroundColor:"#0E4C92", marginTop: 15, width: 190, height: 40, borderRadius: 10}}>
          <Text style={{fontSize: 14, color: "#ffffff", fontWeight: 500, marginLeft: 70, marginTop: 10,  }}>SUBMIT</Text>
        
        </TouchableOpacity>

        <View>

         <TouchableOpacity  onPress={() => this.props.navigation.navigate('CompletePage')}
         style={{backgroundColor:"#0E4C92", marginTop: 20, width: 190, height: 40, borderRadius: 10}}>

            <Text style={{fontSize: 14, color: "#ffffff", fontWeight: 500, marginLeft: 75, marginTop: 10, }}>NEXT</Text>
         
         </TouchableOpacity> 
        
        
        </View>


        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1.5,
    justifyContent: 'row',
    paddingLeft: 10,
    paddingTop: 200,
    backgroundColor: '#ffffff',
  },  

   shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  
  buttonContainer:{
    width: 190,
    height: 40,
    marginLeft: 35,
    marginTop: 20,
    borderRadius: 20,

  }


})





export default DetailsPage;
