import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
    heading:{
      fontSize: 60,
      textAlign: 'center',
      marginTop: -250,
      marginBottom: 50,
    },
    image: {
      flex: 3,
      justifyContent: 'center',
      width: '100%',
      height: 'auto',
      opacity: 0.8,
    },
    body: {
      height: '30%',
      marginVertical: 20,
      width: '100%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 5,
      opacity: 0.9,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    label: {
      fontSize: 22,
      width: '40%',
      
      fontWeight: 'bold',
      flex: 1,
      padding: 10,
    },
    input:{
      borderWidth: 1,
      borderColor: 'black',
      width: '40%',
      height: 40,
      padding: 10,
      fontWeight: 'normal',
      borderRadius: 10,
    },
    button: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      width: 100,
      textAlign: 'center',
      flex: 0.5,
      marginLeft: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 22,
      textAlign: 'center',
    },
    backIcon: {
      height: 50,
      width: 50,
      marginTop: 0,
      marginLeft: 10,
   },
   backBox:{
      height: '10%',
      width: 'auto',
      position: 'relative',
      width: '100%',
      borderColor: 'grey',
      borderBottomWidth: 1,
      top: -300,
      marginBottom: -50
   },
  });

export default styles;