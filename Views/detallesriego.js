import { NativeBaseProvider, Container, Button, Text, Input, FlatList, View } from 'native-base';
import { createStackNavigator, Header } from "@react-navigation/stack";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import { LogBox, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import Detailssrr from './detailsr';

LogBox.ignoreLogs(["InternalTextInput"]);
const DetallesRiego = ({route, navigation}) =>
{
  const {idriego, nombre, idculti, nombreculti, fecha, horastart, horaend} = route.params;
  console.log('------------------------------------')
   const [lRiegos, setlRiegos] = useState([])
  //  const [idriego, setIdriego] = useState('')
  //  const [nombre, setNombre] = useState('')
  //  const [idcultivo, setIdcultivo] = useState('')
   const [nombreCulti, setNombreCulti] = useState('')
   const [fechaa, setFechaa] = useState('')
   const [horaStart1, setHoraStart1] = useState(0)
   const [horaEnd1, setHoraEnd1] = useState(0)
   const [on, SetOn] = useState(false)
   const [mins, setMins] = useState(0)

   useEffect(() => {
    console.log('-------------------Detalles riego recibidos de inicioriegos-----------------------')
    console.log('Idriego: ', idriego)
    console.log('Nombre riego: ', nombre)
    console.log('Id culti: ', idculti)
    console.log('N culti: ', nombreculti)
    console.log('Fecha: ', fecha)
    console.log('HS: ', horastart)
    console.log('HE: ', horaend)
     getRiegos()
    }, [])

    const getRiegos = async() => {
     const respuesta = await axios.get('http://10.0.0.12/App_Irrigacion/api_bd_2/') //cambiar a ip privada
     setlRiegos(respuesta.data)
  }
  const getRiego = async () => {
    const respuesta = await axios.get('http://10.0.0.12/App_Irrigacion/api_bd_2/?idriego='+idr); //cambiar a ip privada
    setIdriego(respuesta.data.idriego);
    setNombre(respuesta.data.nombre);
    setIdculti(respuesta.data.idculti);
    setNombreCulti(respuesta.data.nombreculti);
    setFechaa(respuesta.data.fecha);
    setHoraStart1(respuesta.data.horastart);
    setHoraEnd1(respuesta.data.horaend);
  } 
     const deleteRiego = async (props) => {
      console.log('Riego a borrar:', props.idr)
      const id = props.idr
      const respuesta = await axios.delete('http://10.0.0.12/App_Irrigacion/api_bd_2/?idriego='+id) //cambiar a ip privada
      alert(respuesta.data.msg)
      getRiegos()
    }
    const onPressriego = () => 
    {
      SetOn(!on);
       if (!on) { 
        const url = `http://10.0.0.23/enciende?tiempo=${mins}`; //192.168.43.204 //cambiar a ip de ESP8266
        const respuesta = fetch(url); 
        console.log('Respuesta: ',respuesta); 
      } else {
         const url = `http://10.0.0.23/apaga`;
          const respuesta = fetch(url); 
        }
      }
    return(
      <Detailssrr idr={idriego} nombr={nombre}
       idcultiv={idculti} nombrec={nombreculti} fecha={fecha}
       horastart={horastart} horaend={horaend} riegomanual={onPressriego} mins={setMins}
       cadena={on ? "APAGAR RIEGO":"ENCENDER RIEGO"}
       nav3={deleteRiego}/>
        // <NativeBaseProvider>
        //   <Header>{JSON.stringify(nc)}</Header>
        // <Text>Nombre de riego: {JSON.stringify(nom)}</Text>        
        // <Text>Hora de Inicio: {JSON.stringify(hs)}</Text>
        // <Text>Hora de Fin {JSON.stringify(he)}</Text>
        // {/* <Text>Dias de la semana a regar:  </Text> */}

        // <Button>ENCENDER RIEGO</Button>
        // <Button onPress={()=> {navigation.navigate("aRiego", 
        // {idr : idriego, no : nombre, idc : idculti, nc : nombreculti, f : fechaa, hs : horaStart, he : horaEnd})}}>EDITAR RIEGO</Button>
        // <Button onPress={()=> {deleteRiego()}}>ELIMINAR RIEGO</Button>
        // </NativeBaseProvider>
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

  export default DetallesRiego;