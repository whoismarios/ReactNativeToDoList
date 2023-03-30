import { StyleSheet, View, Text, TextInput, Modal, ImageBackground, Pressable } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavbarComponent from "./NavbarComponent";
import { SelectList } from 'react-native-dropdown-select-list';

export default function GoalInput(props) {

    const data = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers'},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
    ];

    const [categoryArray, setCategoryArray] = useState([]);

    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [selected, setSelected] = useState("");

    // Load data from local storage on app start
    useEffect(() => {
      async function loadData() {
          try {
              const storedData = await AsyncStorage.getItem('category');
              console.log("Stored data displayed from TaskModal: " + storedData);
              if (storedData !== null) {
                  console.log(storedData);
                  const data = JSON.parse(storedData);
                  setCategoryArray(data.categoryArray);
              }
          } catch (error) {
              console.log(error);
              console.log("Error");
          }
      }
      loadData();
  }, []);

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
               
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={categoryArray.map(category => ({ label: category.text, value: category.text }))} 
                    save="value"
                />


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
        height: '60%',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 5,
       marginVertical:100,
        
      },
      taskInputField: {
        width: '90%',
        height: '25%',
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
        marginTop: 50,
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