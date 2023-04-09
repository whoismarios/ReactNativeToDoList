import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    heading:{
        fontSize: 60,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 0,
    },
    backgroundImage:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        opacity: 0.8,
    },
    statsView: {
        flex: 2,
        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        height: '80%',
    },
    statsTextContainer:{
        flex: 2,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: -250,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    statsText:{
        fontSize: 22,
        fontWeight: 'bold',
    },
    pieChart:{
        marginTop: -200,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'grey',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    backIcon: {
       height: 50,
       width: 50,
       marginTop: 50,
       marginLeft: 20,
       marginRight: 30,
    },
    backBox:{
        height: '15%',
        width: 'auto',
        position: 'relative',
        width: '100%',
        borderColor: 'grey',
        borderBottomWidth: 1,
        flex: 0.5,
        backgroundColor: 'white',
        opacity: 0.9,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    secondBox:{
        width: '85%',
    },  
    username:{
        textAlign: 'center',
        marginRight: 10,
    },
    todolistTopLogo:{
        width: 125,
        height:'auto',
        marginTop: 50,
    },
});

export default styles;