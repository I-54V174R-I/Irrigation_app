import { NativeBaseProvider, Container, Button, Text, Input, Center, Heading, Stack } from 'native-base';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import axios from 'axios';

function Login()
{
    const navigation = useNavigation();
    return(
        <NativeBaseProvider>
        <Center backgroundColor={"cyan.400"}>
            <Container height={"100%"} width={"100%"} alignItems="center">
                <Container mx="auto" py="40" px="10">
                    <Heading color={"white"} fontSize="4xl">IRRIGAPP</Heading>
                </Container>
                <Container>
                <Button 
                onPress={()=> {navigation.navigate("iCultivos")}}
                borderBottomWidth = "5" 
                borderRightWidth= "5" 
                borderColor="cyan.500"
                >COMENZAR</Button>
                </Container>
            </Container>
        </Center>
        </NativeBaseProvider>
        );
}
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     tinicio: {
//         fontSize: "5xl",
//         alignContent: Center,
//         backgroundColor: 
//     }
//   });
export default Login;