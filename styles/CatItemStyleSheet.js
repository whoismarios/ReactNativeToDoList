import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    /** 
    categoryItem: {
        fontSize: 20,
        marginVertical: 5,
        marginLeft: 10,
        textAlign: 'center',
        width: '25%',
      },
      catView:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        textAlign: 'center',
        justifyContent: 'space-evenly',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 5,
      },
      trashImage:{
        width: 30,
        height: 30,
      },*/
      catView: {
        width: '75%',
        height: '95%',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
       
        marginTop: 2.5,
        marginLeft: 10,
        marginRight: -30,
      },
      categoryItem: {
        marginHorizontal: 10,
        marginHorizontal: 10,
        fontSize: 22,
      },
      trashImage:{
        height: 40,
        width: 40,
      },
      images:{
        width: '100%',
        height: '65%',
        
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      textView:{
        backgroundColor: 'white',
        width: '100%',
        height: '35%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        
      },
});

export default styles;