import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Picker,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarPicker from 'react-native-calendar-picker';

export default function DatePage({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('java');
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <SafeAreaView style={[styles.container, styles.shadowProp]}>
      <View style={styles.container}>
         <View> <Text style={{color:"#0E4C92", fontWeight: 650, fontSize: 18, marginLeft: 60, marginTop: 30,}}>
            Select Check-In and    
         </Text>
           <Text style={{marginBottom: -10, color:"#0E4C92", fontWeight: 650, fontSize: 18, marginLeft: 50 }}>Check-Out Dates Here!</Text>
         </View>
        <Text style={styles.titleStyle}></Text>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />
        <View style={styles.textStyle}>
          <Text style={styles.textStyle}>Selected Start Date :</Text>
          <Text style={styles.textStyle}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
          <Text style={styles.textStyle}>Selected End Date : </Text>
          <Text style={styles.textStyle}>
            {selectedEndDate ? selectedEndDate.toString() : ''}
          </Text>
        </View>
      </View>
      <View>
        
             <View style={styles.buttonContainer}>

        <TouchableOpacity onPress={() => {
            this.submit(); 
         }}
         style={{backgroundColor:"#0E4C92", marginTop: 15, width: 190, height: 40, borderRadius: 10}}>
          <Text style={{fontSize: 14, color: "#ffffff", fontWeight: 500, marginLeft: 70, marginTop: 10,  }}>SUBMIT</Text>
        
        </TouchableOpacity>

        </View>

       



      

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailsPage')}
            style={{
              width: 190,
              height: 40,
              backgroundColor: '#0E4C92',
              borderRadius: 10,
              marginLeft: 65,
              paddingLeft: 12,
              paddingTop: 13,
              marginTop: -100,
            }}>
            <Text
              style={{
                fontFamily: 'sans-serif',
                fontSize: 14,
                color: '#ffffff',
                paddingLeft: 65,
                fontWeight: 550,

              }}>
              NEXT
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
            <Icon style={styles.info2} name="info" size={25} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Icon style={styles.person} name="person" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'row',
    paddingLeft: -1,
    backgroundColor: '#ffffff',
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  textStyle: {
    marginTop: -2,
    marginLeft: 10,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
    marginTop: 50,
    color: '#0E4C92',
    fontWeight: 'bold',
  },
  home: {
    color: '#0E4C92',
    marginBottom: 25,
    marginLeft: 30,
  },

  info2: {
    color: '#0E4C92',
    marginTop: -50,
    marginLeft: 150,
  },
  person: {
    color: '#0E4C92',
    marginTop: -50,
    marginLeft: 260,
  },
   
  buttonContainer:{
    width: 190,
    height: 40,
    marginLeft: 65,
    marginBottom: 150,
    borderRadius: 20,
  }
});
