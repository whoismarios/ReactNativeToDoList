import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    heading:{
        fontSize: 60,
        textAlign: 'center',
        marginTop: 100,
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
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: -400,
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
    }
});

export default styles;