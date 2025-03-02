import { NativeBaseProvider, Container, Input, FlatList } from 'native-base';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { DateTimePickerModal } from 'react-native-modal-datetime-picker';
import { Checkbox } from 'react-native-paper';
import { Platform, StyleSheet, TextInput, View, Text, Button } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';

const NuevoRiego = ({route, navigation}) =>
{
  const {idaenviar, nomaenviar} = route.params;
   const [lRiegos, setlRiegos] = useState([])
   const [idriego, setIdriego] = useState('')
   const [nombre, setNombre] = useState('')
   const [idculti, setIdculti] = useState('')
   const [nombreCulti, setNombreCulti] = useState('')
   const [fecha, setFecha] = useState('')
   const [horaStart, setHoraStart] = useState(0)
   const [horaEnd, setHoraEnd] = useState(0)

   const [date1, setDate1] = useState(new Date())
   const [mode1, setMode1] = useState('date')
   const [show1, setShow1] = useState(false)
   
   const [date2, setDate2] = useState(new Date())
   const [mode2, setMode2] = useState('date')
   const [show2, setShow2] = useState(false)
   
   const [date3, setDate3] = useState(new Date())
   const [mode3, setMode3] = useState('date')
   const [show3, setShow3] = useState(false)

   const [text1, setText1] = useState('AQUI SE MUESTRA LA FECHA')
   const [text2, setText2] = useState('AQUI SE MUESTRA LA HORA DE I.')
   const [text3, setText3] = useState('AQUI SE MUESTRA LA HORA DE F.')

   useEffect(() => {
    console.log('Params: ', route.params)
    console.log('Id recibido de inicioriegos: ', {idaenviar})
    console.log('Nombre recibido de inicioriegos: ', {nomaenviar})
     getRiegos()
    }, [])

    const getRiegos = async() => {
     const respuesta = await axios.get('http://10.0.0.12/App_Irrigacion/api_bd_2/') //cambiar a ip privada
     setlRiegos(respuesta.data)
  }

   const addRiego = async() => {
    const obj = {nombre, idculti:idaenviar, nombreculti:nomaenviar, fecha:text1, horastart:text2, horaend:text3}
    console.log("Riego a crear: ", obj)
    const respuesta = await axios.post('http://10.0.0.12/App_Irrigacion/api_bd_2/', obj) //cambiar a ip privada
    alert(respuesta.data.msg)
    getRiegos()
    setNombre('')
    setIdculti('')
    setNombreCulti('')
    setText1('')
    setText2('')
    setText3('')
  }
////////////////////////////////////////DTPICKER 1 FECHA//////////////////////////////////////////////////
  const onChange1 = (ev, selDate) => 
  {
    const currentdate = selDate || date;
    setShow1(Platform.OS === 'ios');
    setDate1(currentdate);

    let tempDate = new Date(currentdate);
    let fDate;
    let fd = tempDate.getDate();
    let fm = tempDate.getMonth();
    if(fm<10){
      if(fd<10){
        fDate =  tempDate.getFullYear()  + '-0' + (tempDate.getMonth() + 1) + '-0' + tempDate.getDate();
      }else{
        fDate =  tempDate.getFullYear()  + '-0' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
      }
    }else{
      if(fd<10){
        fDate =  tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-0' + tempDate.getDate();
      }else{
        fDate =  tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
      }
    }
    setText1(fDate)
    console.log('Fecha seleccionada: '+fDate)
  }
  const showMode1 = (curMode) => 
  {
    setShow1(true);
    setMode1(curMode);
  }
  ////////////////////////////////////////DTPICKER 2 HS//////////////////////////////////////////////////
  const onChange2 = (ev, selDate) => 
  {
    const currentdate = selDate || date;
    setShow2(Platform.OS === 'ios');
    setDate2(currentdate);

    let tempDate = new Date(currentdate);
    let fTime;
    let fh = tempDate.getHours();
    let fm = tempDate.getMinutes();
    if(fh<10){
      if(fm<10){
      fTime = '0' + tempDate.getHours() +':0'+ tempDate.getMinutes() + ':00.0000';
      }else{
        fTime = '0' + tempDate.getHours() +':'+ tempDate.getMinutes() + ':00.0000';
      }
    }else{
      if(fm<10){
      fTime = tempDate.getHours() +':0'+ tempDate.getMinutes() + ':00.0000';
      }else{
        fTime = tempDate.getHours() +':'+ tempDate.getMinutes() + ':00.0000';
      }
    }
    setText2(fTime)
    console.log('Hora de inicio seleccionada: '+fTime)
  }
  const showMode2 = (curMode) => 
  {
    setShow2(true);
    setMode2(curMode);
  }
  ////////////////////////////////////////DTPICKER 3 HE//////////////////////////////////////////////////
  const onChange3 = (ev, selDate) => 
  {
    const currentdate = selDate || date;
    setShow3(Platform.OS === 'ios');
    setDate3(currentdate);

    let tempDate = new Date(currentdate);
    let fTime;
    let fh = tempDate.getHours();
    let fm = tempDate.getMinutes();
    if(fh<10){
      if(fm<10){
      fTime = '0' + tempDate.getHours() +':0'+ tempDate.getMinutes() + ':00.0000';
      }else{
        fTime = '0' + tempDate.getHours() +':'+ tempDate.getMinutes() + ':00.0000';
      }
    }else{
      if(fm<10){
      fTime = tempDate.getHours() +':0'+ tempDate.getMinutes() + ':00.0000';
      }else{
        fTime = tempDate.getHours() +':'+ tempDate.getMinutes() + ':00.0000';
      }
    }
    setText3(fTime)
    console.log('Hora de fin seleccionada: '+fTime)
  }
  const showMode3 = (curMode) => 
  {
    setShow3(true);
    setMode3(curMode);
  }

  const onPressActions = () => {
    addRiego()
    navigation.navigate('iRiegos', {idcu: idaenviar})
    }

      return(
         <View style={styles.container}>
                <Text fontSize={19}>Introduce un nombre para el riego:</Text>
                <TextInput  fontSize={19} numberOfLines={2} placeholder={'Nombre'} onChangeText={setNombre}></TextInput>
            <View style={{margin:20}}>
               <Text fontSize={19}>Introduce la fecha:</Text>
               <Button onPress={()=> showMode1('date')} title='Fecha'/>
               <Text>{text1}</Text>
            </View>
            <View style={{margin:20}}>
               <Text fontSize={19}>Introduce la hora de inicio:</Text>
               <Button onPress={()=> showMode2('time')} title='Hora de Inicio'/>
               <Text>{text2}</Text>
            </View>  
            <View style={{margin:20}}>
                 <Text fontSize={19}>Introduce la hora de fin:</Text>
                 <Button onPress={()=> showMode3('time')} title='Hora de Fin'/>
               <Text>{text3}</Text>
            </View>
                 {show1 && (
    <DateTimePicker 
    testID='DateTimePicker1'
     is24Hour={true}
      value={date1}
       mode={mode1}
        display='default'
         onChange={onChange1}/>)}
                 {show2 && (
    <DateTimePicker 
    testID='DateTimePicker2'
     is24Hour={true}
     value={date2}
      mode={mode2}
       display='default'
        onChange={onChange2}/>)}
                 {show3 && (
    <DateTimePicker 
    testID='DateTimePicker3'
     is24Hour={true}
     value={date3}
      mode={mode3}
       display='default'
        onChange={onChange3}/>)}
               <Button title='GUARDAR RIEGO' onPress={()=> onPressActions()}></Button>
                 </View>
          //  <View style={{margin:25}}>
          //    <Text fontSize={19}>Introduce un nombre para el riego:</Text>
          //    <TextInput  fontSize={19} numberOfLines={2} placeholder={'Nombre'} onChangeText={setNombre}></TextInput>
             
          //    <Text fontSize={19}>Introduce la hora de inicio:</Text>
          //    {show && (<Itemhoras value={date} modo={mode} evento={onChange}/>)}
          //    <View><Button title={"Hora de Inicio"} onPress={()=>showMode('date')}>HORA INICIO</Button></View>
             
          //    <Text fontSize={19}>Introduce la hora de fin:</Text>
          //    {show && (<Itemhoras value={date} modo={mode} evento={onChange}/>)}
          //    <View><Button title={"Hora de Fin"} onPress={()=>showMode('time')}>HORA FIN</Button></View>
             
          //    <Text fontSize={19}>Periodo seleccionado:{text}</Text>
          //    <Button title='GUARDAR RIEGO' onPress={()=> onPressActions()}>GUARDAR RIEGO</Button>
          //  </View>
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

export default NuevoRiego;