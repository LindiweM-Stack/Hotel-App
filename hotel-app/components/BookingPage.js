import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { firebase } from './Firebase/Config';
import { Card } from 'react-native-paper';
import DetailsPage from './DetailsPage';
import firestore from '@react-native-firebase/firestore';
import HomePage from './HomePage';
import Login from './Login';
import SignUp from './SignUp';

export default function BookingPage({ navigation,route }) {


  const [rooms, setRooms] = useState([]);
  
  useEffect((data) =>{
    console.log(route.params)
  })
  
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View>
   
        <Card style={[styles.card, styles.shadowProp]}>
          <Image source={route.params.image}

          style={styles.image} 
          />
          <View>
            <Text style={styles.master}>{route.params.name}</Text>

          </View>

          <View>
            <Text style={{ fontSize: 13, marginLeft: 10 }}>{route.params.bed}</Text>

          </View>
          <View>
            <Text
              style={{
                marginLeft: 230,
                marginTop: -35,
                fontSize: 13,
                fontWeight: 'bold',
              }}>
           {route.params.price}
               <br />
              Per Night
            </Text>
          </View>
        </Card>
      

      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.about}>About</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('DetailsPage')}>
          <Text style={styles.details}>Details</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('LocationPage')}>
          <Text style={styles.facilities}>Location</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignSelf: 'stretch',
          borderBottomWidth: 1,
          borderBottomColor: '#000',
          marginTop: 10,
          marginBottom: 10,
          width: 265,
        }}
      />

      <View>
        <Card style={[styles.tv, styles.shadowProp]}>
          <Icon
            style={{ marginTop: 10, marginLeft: 18 }}
            name="tv"
            size={25}
            color="#0E4C92"
          />
          <Text style={{ marginLeft: 22, color: '#0E4C92' }}>TV</Text>
        </Card>
      </View>

      <View>
        <Card style={[styles.wifi, styles.shadowProp]}>
          <Icon
            style={{ marginTop: 10, marginLeft: 18 }}
            name="wifi"
            size={25}
            color="#0E4C92"
          />
          <Text style={{ marginLeft: 15, color: '#0E4C92' }}>Wi-Fi</Text>
        </Card>
      </View>

      <View>
        <Card style={[styles.ac, styles.shadowProp]}>
          <Icon
            style={{ marginTop: 10, marginLeft: 18 }}
            name="ac-unit"
            size={25}
            color="#0E4C92"
          />
          <Text style={{ marginLeft: 23, color: '#0E4C92' }}>AC</Text>
        </Card>
      </View>

      <View>
        <Card style={[styles.parking, styles.shadowProp]}>
          <Icon
            style={{ marginTop: 10, marginLeft: 18 }}
            name="sensor-window"
            size={25}
            color="#0E4C92"
          />
          <Text style={{ marginLeft: 10, color: '#0E4C92' }}>Minibar</Text>
        </Card>
      </View>

      <View>
        <Text style={styles.description}>
        {route.params.description}
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('DatePage')}
          style={styles.button}>
          <Text
            style={{
              fontFamily: 'sans-serif',
              fontSize: 16,
              color: '#ffffff',
            }}>
            {' '}
            Reserve{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Icon style={styles.home} name="home" size={25} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('CompletePage')}>
          <Icon style={styles.info} name="info" size={25} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Icon style={styles.person} name="person" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'row',
    paddingLeft: 30,
    paddingTop: 46,
    backgroundColor: '#ffffff',
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  card: {
    width: 317,
    height: 250,
    marginTop: -46,
   
    marginLeft: -30,
  },

  image: {
    height: 170,
    width: 317,
   
  },
  logo: {
    width: 30,
    height: 30,
    backgroundColor: '#0E4C92',
    borderRadius: 30,
    marginLeft: 240,
    marginTop: -10,
  },

  master: {
    fontSize: 18,
    color: '#1570d1',
    marginTop: -2,
    marginLeft: 9,
  },
  about: {
    marginTop: 30,
  },

  details: {
    marginLeft: 100,
    marginTop: -21,
  },

  facilities: {
    marginLeft: 200,
    marginTop: -20,
  },

  tv: {
    width: 60,
    height: 60,
    marginTop: 20,
    marginLeft: -6,
  },

  wifi: {
    width: 60,
    height: 60,
    marginTop: -60,
    marginLeft: 65,
  },

  ac: {
    width: 60,
    height: 60,
    marginTop: -60,
    marginLeft: 133,
  },

  parking: {
    width: 60,
    height: 60,
    marginTop: -60,
    marginLeft: 200,
  },

  description: {
    fontSize: 15,
    color: 'grey',
    marginTop: 30,
    marginLeft: -10,
  },

  button: {
    height: 40,
    width: 150,
    backgroundColor: '#0E4C92',
    marginTop: 50,
    marginLeft: 55,
    borderRadius: 20,
    paddingLeft: 36,
    paddingBottom: -50,
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    fontSize: 16,
    color: '#ffffff',
  },

  home: {
    color: '#0E4C92',
    marginTop: 50,
  },

  info: {
    color: '#0E4C92',
    marginTop: -26,
    marginLeft: 120,
  },
  person: {
    color: '#0E4C92',
    marginTop: -26,
    marginLeft: 245,
  },
});
