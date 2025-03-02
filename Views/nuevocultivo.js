import { NativeBaseProvider, Container, Button, Text, Input, FlatList, View } from 'native-base';
import { TextInput } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


const  NuevoCultivo = ({navigation}) =>
{
   const [lCultivos, setlCultivos] = useState([])
   const [nombrecultivo, setNombreCultivo] = useState('')
   const [descripcion, setDescripcion] = useState('')
   const [idcultivo, setIdcultivo] = useState('')
   useEffect(() => {
     getCultivos()
    }, [])
   
    const getCultivos = async() => {
     const respuesta = await axios.get('http://10.0.0.12/App_Irrigacion/api_bd/') //cambiar a ip privada
     setlCultivos(respuesta.data)
  }

  const addCultivo = async() => {
   const obj = {nombrecultivo, descripcion}
   const respuesta = await axios.post('http://10.0.0.12/App_Irrigacion/api_bd/', obj) //cambiar a ip privada
   alert(respuesta.data.msg)
   getCultivos()
   setNombreCultivo('')
   setDescripcion('')
 }
const onPressActions = () => {
addCultivo()
navigation.navigate('iCultivos')
}

    return(
        <NativeBaseProvider>
        <Text fontSize={19}>Introduce un nombre:</Text>
        <TextInput  fontSize={19} numberOfLines={2} placeholder={'Nombre'} onChangeText={setNombreCultivo}></TextInput>
        <Text fontSize={19}>Introduce una descripcion:</Text>
        <TextInput  fontSize={19} numberOfLines={2} placeholder={'Descripcion'} onChangeText={setDescripcion}></TextInput>
        <Button onPress={()=> onPressActions()}>GUARDAR CULTIVO</Button>
        </NativeBaseProvider>
        );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default NuevoCultivo;