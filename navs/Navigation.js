import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../Views/login';
import NuevoCultivo from '../Views/nuevocultivo';
import NuevoRiego from '../Views/nuevoriego';
import DetallesCultivo from '../Views/detallescultivo';
import DetallesRiego from '../Views/detallesriego';
import InicioCultivos from '../Views/iniciocultivo';
import InicioRiegos from '../Views/inicioriegos';
import { NativeBaseProvider, Container, Button, Text, H1, Form, Item, Input, Root } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActualizarCultivo from '../Views/actualizarcultivo';
import ActualizarRiego from '../Views/actualizarriego';

const Stack = createNativeStackNavigator();

export default function NavigationStackC() {
    return (
        <NavigationContainer>
         <Stack.Navigator initialRouteName='loginScreen'>
             <Stack.Screen 
                 name='loginScreen' 
                 component={Login}
                 options={{
                     title: "Iniciar Sesión",
                     headerShown: false,
                     }} 
             />    
             <Stack.Screen
                 name='iCultivos'
                 component={InicioCultivos}
                 options={{
                     title: "Tus Cultivos",
                     }} 
             />             
             <Stack.Screen
                 name='iRiegos'
                 component={InicioRiegos}
                 options={{
                     title: "Tus Riegos",
                     }} 
             />                        
             <Stack.Screen
                 name='nCultivo'
                 component={NuevoCultivo}
                 options={{
                     title: "Agregar Nuevo Cultivo",
                     }} 
             />             
             <Stack.Screen
                 name='nRiego'
                 component={NuevoRiego}
                 options={{
                     title: "Agregar Nuevo Riego",
                     }} 
             />             
             <Stack.Screen
                 name='dCultivo'
                 component={DetallesCultivo}
                 options={{
                     title: "Detalles de Cultivo",
                     }} 
             />     
             <Stack.Screen
                 name='dRiego'
                 component={DetallesRiego}
                 options={{
                     title: "Detalles de Riego",
                     }} 
             /> 
             <Stack.Screen
                 name='aCultivo'
                 component={ActualizarCultivo}
                 options={{
                     title: "Actualizar datos de Cultivo",
                     }} 
             /> 
             <Stack.Screen
                 name='aRiego'
                 component={ActualizarRiego}
                 options={{
                     title: "Actualizar datos de Riego",
                     }} 
             />
          </Stack.Navigator>
        </NavigationContainer>
    );
}
