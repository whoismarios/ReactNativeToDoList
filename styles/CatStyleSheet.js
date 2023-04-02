import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: "auto",
        opacity:0.8,
      },
      heading:{
        fontSize: 60,
        textAlign: 'center',
        marginTop: -200, 
      },
      catsHeading:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
      },
      addToDoContainer: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '20%',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 5,
        marginVertical:50,
      },
      addToDoContainer2: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '32.5%',
        
        
        padding: 5,
        marginTop: -40,
        marginVertical:-100,
      },
      taskInputField: {
        width: '90%',
        height: '20%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        color: 'black',
        fontSize: 28,
        fontFamily: 'Arial',
        marginTop: 50
      },
      taskContainer: {
        width: '90%',
        marginTop: 20,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '60%',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
      },
      getStartedButton:{
        width: '60%',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 25,
        backgroundColor: 'black',
        borderColor: 'black',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      getStartedButtonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontSize: 22,
      },
      backIcon: {
        height: 50,
        width: 50,
        marginTop: 60,
        marginLeft: 20,
        marginRight: 30,
     },
     backBox:{
        height: '14.5%',
        width: 'auto',
        position: 'relative',
        width: '100%',
        borderColor: 'grey',
        borderBottomWidth: 1,
        top: -275,
        marginBottom: -50,
        backgroundColor: 'white',
        opacity: 0.9,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
     },
     username:{
      textAlign: 'center',
      marginRight: 10,
    },
    flatlistScroll:{
      
      
    },
});

export default styles;