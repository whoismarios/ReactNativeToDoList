import { StyleSheet, View, Text, TextInput, Modal, ImageBackground, Pressable, Keyboard} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavbarComponent from "./NavbarComponent";
import { SelectList } from 'react-native-dropdown-select-list';
import styles from "../styles/GoalInputStyleSheet";

export default function GoalInput(props) {

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
      Keyboard.dismiss();
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
          <ImageBackground source={require("./../assets/noteBook.png")} resizeMode="cover" style={styles.image} >

            <View style={styles.displayView}>

              <View style={styles.addToDoContainer}>
                <Text style={styles.heading} >Add a new Task</Text>
                <TextInput onSubmitEditing={Keyboard.dismiss} value={enteredGoalText} onChangeText={goalInputHandler} style={styles.taskInputField} placeholder='write your task ...' />
               
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

