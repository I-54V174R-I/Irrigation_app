import { NativeBaseProvider, Container, Button, Text, Input, FlatList, View } from 'native-base';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import Detailss from './details';

const DetallesCultivo = ({route, navigation}) =>
{
  const {idcultivo, nombrecultivo, descripcion} = route.params;
  const [lCultivos, setlCultivos] = useState([]);
   useEffect(() => {
    console.log("---------DETAILS----------/n")
    console.log("Idsent: ", {idcultivo})
    console.log("Nombresent: ", {nombrecultivo})
    console.log("Desc sent: ", {descripcion})
     getCultivos();
    }, [])

     const getCultivos = async () => {
      const respuesta = await axios.get('http://10.0.0.12/App_Irrigacion/api_bd/'); //cambiar a ip privada
      setlCultivos(respuesta.data);
   }
 
 const getCultivo = async (props) => {
   const idc = props.idcultivo;
   const respuesta = await axios.get('http://10.0.0.12/App_Irrigacion/api_bd/?idcultivo='+idc); //cambiar a ip privada
   setIdcultivo(respuesta.data.idcultivo);
   setNombre(respuesta.data.nombrecultivo);
   setDescripcion(respuesta.data.descripcion);
 } 
      const deleteCultivo = async (props) => {
        const id = props.idc;
        console.log('Item a borrar:', props.idc)
        const respuesta = await axios.delete('http://10.0.0.12/App_Irrigacion/api_bd/?idcultivo='+id); //cambiar a ip privada
        alert(respuesta.data.msg);
        getCultivos();
      }
    return(
      <Detailss 
      idc={idcultivo} 
      nombrec={nombrecultivo} 
      desc={descripcion} 
      nav3={deleteCultivo}/>
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
  
  export default DetallesCultivo;