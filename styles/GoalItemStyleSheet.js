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
      doneButton:{
        width: 60,
        textAlign: 'center',
        height: 'auto',
        fontSize: 16,
        backgroundColor: '#aaf683',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 3,
        opacity: 0.9,
        margin: 5,
      },
      deleteButton:{
        width: 60,
        textAlign: 'center',
        height: 'auto',
        fontSize: 16,
        backgroundColor: '#ee6055',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 3,
        opacity: 0.9,
        margin: 5,
      },
      buttonBox: {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }
});

export default styles;