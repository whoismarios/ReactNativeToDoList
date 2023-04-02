import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    displayView:{
      height: '86%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    addToDoContainer: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 'auto',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 5,
        marginVertical:75,
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
        marginTop: 30,
        marginBottom: 40,
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
      heading: {
        backgroundColor: 'transparent',
        padding: 5,
        fontSize: 24,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: "auto",
        opacity:0.8,
      },
      getStartedButton:{
        width: '60%',
        borderWidth: 2, 
        borderColor: 'black',
        borderRadius: 25,
        backgroundColor: 'black',
        borderColor: 'black',
        marginTop: 30,
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
       marginTop: 50,
       marginLeft: 20,
       marginRight: 30,
      } ,
      //height 100% to make it work or update ui
      backBox:{
        height: '14%',
        width: 'auto',
        position: 'relative',
        width: '100%',
        borderColor: 'grey',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        opacity: 0.9,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      username:{
        textAlign: 'center',
        marginRight: 10,
      }
});

export default styles;