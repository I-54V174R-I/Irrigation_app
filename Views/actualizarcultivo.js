import { NativeBaseProvider, Container, Text, Input, FlatList } from 'native-base';
import { TextInput } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import UpdateVi from './updateView';
import axios from 'axios';
import UpdateInput from './updateView';

const ActualizarCultivo = ({route, navigation}) =>
{
    const {idupdate, nupdate, dupdate} = route.params;
    const [lCultivos, setlCultivos] = useState([])
    const [nombrecultivo, setNombreCultivo] = useState(nupdate)
    const [descripcion, setDescripcion] = useState(dupdate)
    const [idcultivo, setIdcultivo] = useState('')
    useEffect(() => {
      console.log('Update cultivo: ID: ', idupdate) 
      console.log('Update cultivo: current NC: ', nupdate) 
      console.log('Update cultivo: current DESC: ', dupdate) 
     }, [])

    const updateCultivo = async() => {
        const obj = {idcultivo:idupdate, nombrecultivo, descripcion}
        console.log('Object: ', obj)
        console.log('Update cultivo: ID: ', idupdate) 
        console.log('Update cultivo: new NC: ', nombrecultivo) 
        console.log('Update cultivo: new DESC: ', descripcion) 
        const respuesta = await axios.put('http://10.0.0.12/App_Irrigacion/api_bd/',obj)//192.168.43.203 //cambiar a ip privada
        alert(respuesta.data.msg)
        setIdcultivo('') 
        setNombreCultivo('')
        setDescripcion('')
     }
     const evaluar = (var1, var2) =>
     {
      if(var1==="" && var2===""){
        nombrecultivo===nupdate
        descripcion===dupdate
        updateCultivo()
        navigation.navigate('iCultivos')
      }
      if(var1==="" && var2!==""){
        nombrecultivo===nupdate
        updateCultivo()
        navigation.navigate('iCultivos')
      }
      if(var1!=="" && var2===""){
        descripcion===dupdate
        updateCultivo()
        navigation.navigate('iCultivos')
      }
      if(var1==nombrecultivo && var2==descripcion){
        updateCultivo()
        navigation.navigate('iCultivos')
      }
     }
    return(
        <UpdateInput 
        ra={"Nombre de cultivo actual: "+nupdate}
        ra2={"Descripcion actual: "+dupdate} 
        texto={"Introduce un nombre:"}
        texto2={"Introduce una descripcion:"} 
        placehold={'Nuevo registro'} 
        campo={setNombreCultivo} 
        campo2={setDescripcion} 
        valor={setNombreCultivo}
        valor2={setDescripcion}
        onpress={()=>evaluar(nombrecultivo, descripcion)}/>
        );
}
const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "white",
        borderRadius: 20,
        marginVertical:5,
        padding: 30,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      button: {
        width: 10,
        padding: 10,
        height: 10,
      },
});
export default ActualizarCultivo;