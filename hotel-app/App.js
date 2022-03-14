import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from './components/Firebase/Config';
import firestore from '@react-native-firebase/firestore';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import DatePage from './components/DatePage';
import DetailsPage from './components/DetailsPage';
import CompletePage from './components/CompletePage';
import LocationPage from './components/LocationPage';
import ForgotPassword from './components/ForgotPassword';
import SettingsScreen from './components/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="BookingPage" component={BookingPage} />
          <Stack.Screen name="DatePage" component={DatePage} />
          <Stack.Screen name="DetailsPage" component={DetailsPage} />
          <Stack.Screen name="CompletePage" component={CompletePage} />
          <Stack.Screen name="LocationPage" component={LocationPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 20,
  },
});
