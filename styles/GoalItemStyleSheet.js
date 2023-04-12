import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    task2: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Arial',
        color: 'black',
        width: '30%',
        height: 'auto',
      },
      singleTaskContainer: {
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.9)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        marginTop: 15,
        alignItems: 'center',
        height: 75,
      },
      leftAction:{
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        flex: 1,
        height: '85%',
        marginTop: '4%',
      },
      leftText:{
        color: 'white',
        fontWeight: 600,
        fontSize: 25,
        paddingLeft:10,
      },
      rightAction:{
        borderRadius: 10,
        backgroundColor: '#dd2c00',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '85%',
        marginTop: '20%',
      },
      rightText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 600,
        fontSize: 25,
      },
      rightActionPressable:{
        
        
      },
});

export default styles;