import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      justifyContent: 'center',
      width: '100%',
      height: "100%",
      opacity:0.8,
    },
    taskContainer: {
      height: 'auto',
      width: '90%',
      marginTop: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 15,
      backgroundColor: 'rgba(255,255,255,0.9)',
      padding: 5,
      display: 'flex',
      flexDirection: 'column',
    },
    greeting: {
      textAlign: 'center',
      color: 'black',
      fontSize: 36,
      fontWeight: 'bold',
      marginTop: 60,
      marginBottom: 20,
    },
  });

export default styles;