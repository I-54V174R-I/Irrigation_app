// import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
// import { NativeBaseProvider, Container, Button, Text, H1, Form, Item, Input } from 'native-base';
// import { Checkbox, List } from 'react-native-paper';
// import { DateTimePickerModal } from 'react-native-modal-datetime-picker';
// import { LineChar } from 'react-native-chart-kit';
// import { Axios } from 'axios';
// import NavigationStackC from './navs/Navigation.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStackC from './navs/Navigation';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
  return (
    <NavigationStackC/>
  );
}


