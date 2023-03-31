import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navbar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#ffffff',
        bottom: 0,
        marginTop: -120,
        height:120,
        alignItems: 'center',
      },
      shadowProps: {
        shadowColor: '#171717',
        shadowOffset: {width: 15, height: 20},
        shadowOpacity: 0.8,
        shadowRadius: 100,
      },
      navbarIcon:{
        width:45,
        height:45,
      },
      navbarIconPlus:{
        marginBottom:90,
        backgroundColor: '#ffffff',
        borderColor: '#5CCB7A',
        borderWidth: 4,
        borderRadius:30,
        alignItems: 'center',
        width: 90,
        height: 90,
      },
      iconViewWrapper:{
        width:55,
        height:55,
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default styles;