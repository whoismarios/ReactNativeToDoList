import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageContainer:{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: -180,
    },
    images:{
      width: 80,
      height: 80,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    actualImage: {
      width:60,
      height:60,
    },
    modalTop:{
      flex: 1,
      width: '100%',
      opacity: 0.8,
    },
    topImage:{
      width: '100%',
    },
    logo:{
      width: 275,
      height: 275,
      marginTop: -100,
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
      borderWidth: 2,
      borderRadius: 200
    },
    getStartedButton:{
      width: '60%',
      borderWidth: 1, 
      borderColor: 'blue',
      borderRadius: 25,
      backgroundColor: 'black',
      borderColor: 'black',
    },
    getStartedButtonText: {
      textAlign: 'center',
      padding: 10,
      color: 'white',
      fontSize: 22,
    },  
    modalContainer: {
      flex:1.5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      padding: 20,
      opacity: 1,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    shadowProps: {
      shadowColor: '#171717',
      shadowOffset: {width: 15, height: 20},
      shadowOpacity: 0.8,
      shadowRadius: 100,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 200,
      marginBottom: 20,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ced4da',
      backgroundColor: '#ced4da',
      color: 'black',
      textAlign: 'center',
      borderRadius: 25,
      padding: 10,
      width: '100%',
      marginBottom: 20,
      fontSize: 18,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      height: "auto",
      opacity:0.8,
    },
  });

export default styles;