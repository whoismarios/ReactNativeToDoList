import { StyleSheet, View, Text, TextInput, Button, Modal, ImageBackground, Pressable } from "react-native";
import { useState } from "react";
import NavbarComponent from "./NavbarComponent";

export default function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler (enteredText){
      setEnteredGoalText(enteredText);
    }
  
    function addGoalHandler(){
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
          <ImageBackground source={require("./../assets/noteBook.png")} resizeMode="cover" style={styles.image} >

            <View style={styles.displayView}>

              <View style={styles.addToDoContainer}>
                <Text style={styles.heading} >Add a new Task</Text>
                <TextInput value={enteredGoalText} onChangeText={goalInputHandler} style={styles.taskInputField} placeholder='write your task ...' />
               
                <Pressable style={styles.getStartedButton} onPress={addGoalHandler}>
                  <Text style={styles.getStartedButtonText}>Add</Text>
                </Pressable>

              </View>

              <NavbarComponent onCategoryPressed={props.onCloseGoalOpenCat} onHomePressed={props.onCancel} onStatsPressed={props.closeTaskOpenStats} onSettingsPressed={props.closeTaskOpenSettings} />

            </View>
          </ImageBackground>
        </Modal>
    );
}

const styles = StyleSheet.create({
    displayView:{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    addToDoContainer: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '35%',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 5,
       marginVertical:100,
        
      },
      taskInputField: {
        width: '90%',
        height: '30%',
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
});