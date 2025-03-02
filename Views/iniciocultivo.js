import { NativeBaseProvider, Container, Button, Text, Input, FlatList, View } from 'native-base';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemCultivo from './ItemCultivo';

const InicioCultivos = ({navigation}) =>
{
  const [lCultivos, setlCultivos] = useState([])
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [idcultivo, setIdcultivo] = useState('')
  
  useEffect(() => {
    getCultivos()
   }, [])

   const getCultivos = async() => {
    const respuesta = await axios.get('http://10.0.0.12/App_Irrigacion/api_bd/') //cambiar a ip privada
    setlCultivos(respuesta.data)
 }
 
const getCultivo = async($var) => {
  const idc = $var
  const respuesta = await axios.get('http://10.0.0.12/App_Irrigacion/api_bd/?idcultivo='+idc)
  setIdcultivo(respuesta.data.idcultivo)
  setNombre(respuesta.data.nombrecultivo)
  setDescripcion(respuesta.data.descripcion)
} 
    return(
        <NativeBaseProvider>        
        <FlatList
        style={{marginTop:15}}
        data={lCultivos}
        keyExtractor={item =>item.idcultivo}
        renderItem={ ({ item, index }) => {   
          console.log('Item: ',item)
          return(
           <ItemCultivo idcultivo={item.idcultivo}
           nombrecultivo={item.nombrecultivo} descripcion={item.descripcion}
           onpress={()=>navigation.navigate('dCultivo', item)}
           />
          )
        } }
      />
        <Button onPress={()=>navigation.navigate('nCultivo')}>AÑADIR NUEVO CULTIVO</Button>           
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
export default InicioCultivos;