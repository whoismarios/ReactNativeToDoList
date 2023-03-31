import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    task2: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Arial',
        color: 'black',
        width: '60%',
      },
      singleTaskContainer: {
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.9)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 15,
        alignItems: 'center',
      },
      doneButton:{
        width: 60,
        textAlign: 'center',
        height: 'auto',
        fontSize: 16,
        backgroundColor: 'green',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 3,
        opacity: 0.9,
      },
      deleteButton:{
        width: 60,
        textAlign: 'center',
        height: 'auto',
        fontSize: 16,
        backgroundColor: 'red',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 3,
        opacity: 0.9,
      },
      buttonBox: {
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }
});

export default styles;