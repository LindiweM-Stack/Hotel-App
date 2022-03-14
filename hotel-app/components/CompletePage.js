import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {firebase} from './Firebase/Config';

export default function CompletePage({navigation}) {
  return(
    <View style={[styles.container, styles.shadowProp]}> 
        <View>
         <Card style={[styles.card, styles.shadowProp]}>
          <Text style={{fontSize: 18, color:"#0E4C92", fontWeight: "bold", marginLeft: 27, marginTop: 20}}>Booking Complete!</Text>
         
         
         </Card>

             <View>
              <TouchableOpacity style={styles.touch}>View booking</TouchableOpacity>
            
            </View>

                <View>
              <TouchableOpacity style={styles.touch1}>Cancel booking</TouchableOpacity>
            
            </View>
        
        
        </View>


        <View>

      <Card style={[styles.card2, styles.shadowProp]}> <Text style={{fontSize: 13, color:"grey", fontWeight: "bold", marginLeft: 27, marginTop: 20}}>Room description: Double Room with two double beds, TV, AC and Wifi Connection<br/>Occupants: Two Adults and 1 child.<br/>Date: 16 July 2021 - 20 July 2021<br/>Price: R 950 * 4 nights = R 3800</Text>
         </Card>
        
        
        
        </View>

          <View>
           <TouchableOpacity onPress={() => navigation.navigate('LocationPage')}
            style={{width: 120, height: 30, backgroundColor: "#0E4C92", borderRadius: 20, marginLeft: 80, paddingLeft: 12, paddingTop: 5, marginTop: 130,}}>
             <Text style={{  fontFamily: 'sans-serif', fontSize: 16, color: "#ffffff", }}>Get Directions</Text>
           </TouchableOpacity>
          
          </View>

        <View>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}
         >
         <Icon style={styles.home}
         
          name="home" size={25}/>
        </TouchableOpacity>
        </View>

          <View>
         <TouchableOpacity onPress={() => navigation.navigate('DetailsPage')}
         >
         <Icon style={styles.info}
         
          name="info" size={25}/>
        </TouchableOpacity>
        </View>

             <View>
         <TouchableOpacity>
         <Icon style={styles.person}
         
          name="person" size={25}/>
        </TouchableOpacity>
        </View>


    
    
      </View>
  )
}


const styles= StyleSheet.create({
   container: {
    flex: 1.5,
    justifyContent: 'row',
    paddingLeft: 10,
    paddingTop: 46,
    backgroundColor: '#ffffff',
  },

  




    shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  card:{
    width: 220,
    height: 70,
    marginLeft: 30
  },  
  touch:{
    height: 40,
    width: 120,
    backgroundColor: "#0E4C92",
    marginTop: 100,
    marginLeft: 10,
    borderRadius: 20,
    paddingLeft: 10,
    paddingBottom: -50,
    justifyContent: "center",
    fontFamily: 'sans-serif',
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold"
  },

  touch1:{
    height: 40,
    width: 120,
    backgroundColor: "#0E4C92",
    marginTop: -40,
    marginLeft: 160,
    borderRadius: 20,
    paddingLeft: 6,
    paddingBottom: -50,
    justifyContent: "center",
    fontFamily: 'sans-serif',
    fontSize: 16,
    color: "#ffffff"
  },

  
  card2:{
    width: 276,
    height: 140,
    marginLeft: 12,
    marginTop: 70,
  },

   home:{
    color:"#0E4C92",
    marginTop: 20,
    marginLeft: 20,
    
  },

   info:{
    color:"#0E4C92",
    marginTop: -18,
    marginLeft: 145,
  },
  person:{
    color:"#0E4C92",
    marginTop: -30,
    marginLeft: 260,
  },
  

})