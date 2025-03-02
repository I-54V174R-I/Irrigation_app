import { NativeBaseProvider, Container, Button, Text, Input, FlatList, View } from 'native-base';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import ItemRiego from './ItemRiego';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const InicioRiegos = ({route, navigation}) =>
{
  const {idcu, nomcult} = route.params;
  const [lRiegos, setlRiegos] = useState([])
  const [idriego, setIdriego] = useState('')
  const [nombre, setNombre] = useState('')
  const [idcultivo, setIdcultivo] = useState('')
  const [nombrecultivo, setNombrecultivo] = useState('')
  const [fecha, setFecha] = useState('')
  const [horastart, setHorastart] = useState('')
  const [horaend, setHoraend] = useState('')
  const [riegosFiltrados, setRiegosFiltrados] = useState('')
  
  useEffect(() => {
    console.log('Idcultivosentfromdetallescult', {idcu})
    console.log('Nombrecultivosentfromdetallescult', {nomcult})
    getRiegos()
    filterRiegos(lRiegos)
   }, [])

   const getRiegos = async() => {
    const respuesta = await axios.get('http://10.0.0.12/App_Irrigacion/api_bd_2/') //cambiar a ip privada
    setlRiegos(respuesta.data)
 }
 
const getRiego = async (props) => {
  const idr = props.idriego
  const respuesta = await axios.get('http://10.0.0.12/App_Irrigacion/api_bd_2/?idriego='+idr)
  setIdriego(respuesta.data.idriego)
  setNombre(respuesta.data.nombre)
  setIdcultivo(respuesta.data.idcultivo)
  setNombrecultivo(respuesta.data.nombrecultivo)
  setFecha(respuesta.data.fecha)
  setHorastart(respuesta.data.horastart)
  setHoraend(respuesta.data.horaend)
} 
const filterRiegos = (array) =>
{
  console.log('Registrosafiltrar: ', array)
  setRiegosFiltrados(lRiegos.filter(reg_idc => reg_idc.idculti===idcu))
}
    return(
      <NativeBaseProvider>        
      <FlatList
      style={{marginTop:15}}
      data={riegosFiltrados}
      keyExtractor={item =>item.idriego}
      renderItem={ ({ item, index }) => {
        console.log('Item: ',item)
        console.log('Arreglos filtrados:', riegosFiltrados)
        let nombreaenviar = riegosFiltrados[0].nombreculti;
        console.log('Nombreculti extraido:', nombreaenviar)
        return(
        <ItemRiego idriego={item.idriego}
            nombre={item.nombre} idculti={item.idculti}  
            nombreculti={item.nombreculti} fecha={item.fecha} horastart={item.horastart} horaend={item.horaend}
            onpress={()=>navigation.navigate('dRiego', item)}
            />
        )
      } }
    />
      <Button onPress={()=>navigation.navigate('nRiego', {idaenviar:idcu, nomaenviar:nomcult})}>AÑADIR NUEVO RIEGO</Button>           
      </NativeBaseProvider>
    )
}
///////////////////////////////// EJEMPLO /////////////////////////////////

// const Item = ({ it, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.title, textColor]}>{it.title}</Text>
//   </TouchableOpacity>
// );

// const App = () => {
//   const [selectedId, setSelectedId] = useState(null);

//   const renderItem = ({ it }) => {
//     const backgroundColor = it.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//     const color = it.id === selectedId ? 'white' : 'black';

//     return (
//       <Item
//         it={it}
//         onPress={() => setSelectedId(it.id)}
//         backgroundColor={{ backgroundColor }}
//         textColor={{ color }}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(it) => it.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };
///////////////////////////////// EJEMPLO /////////////////////////////////

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default InicioRiegos;