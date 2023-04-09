import { Image, View, Text, TextInput, Modal, ImageBackground, Pressable, Keyboard} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavbarComponent from "./NavbarComponent";
import { SelectList } from 'react-native-dropdown-select-list';
import styles from "../styles/GoalInputStyleSheet";
import * as Haptics from 'expo-haptics';
import DateTimePicker from '@react-native-community/datetimepicker';
import { scheduleNotificationAsync } from 'expo-notifications';

export default function GoalInput(props) {

  const [categoryArray, setCategoryArray] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [username, setUsername] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  

  function handleDateChange(event, date) {
    if (date !== undefined) {
      setSelectedDate(date);
      console.log(date.toLocaleDateString('en-GB'));
      console.log(date);
      
    }
  }
  
  // Load data from local storage on app start
  useEffect(() => {
    async function loadData() {
        try {
            const storedData = await AsyncStorage.getItem('category');
            console.log("Stored data displayed from TaskModal: " + storedData);
            if(storedData !== null) {
              console.log(storedData);
              const data = JSON.parse(storedData);
              setCategoryArray(data.categoryArray);
            }
        } catch (error) {
            console.log(error);
        }
    }
    loadData();
}, []);

 // Load data from local storage on app start
 useEffect(() => {
  async function loadData() {
      try {
          const storedData = await AsyncStorage.getItem('appData');
          console.log("Stored data displayed from TaskModal2: " + storedData);
          if(storedData !== null) {
            console.log(storedData);
            const data = JSON.parse(storedData);
            setUsername(data.username);
            console.log(data.username);
          }
      } catch (error) {
          console.log(error);
      }
  }
  loadData();
}, []);

useEffect(()=> {
  
}, [categoryArray]);

  function goalInputHandler (enteredText){
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Success)
    props.onAddGoal(enteredGoalText, selectedCategory, selectedDate );
    setEnteredGoalText('');
    setSelectedCategory('');
    Keyboard.dismiss();

    try{
      const schedulingOptions = {
      content: {
        title: 'Task Reminder',
        body: `You have a task due today!`,
      },
      trigger: {
        //date: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 8),
        seconds: 5, //5 Second Tests are working!! TODO: Improve scedule time. Maybe a new input field?!
      },
    };
    scheduleNotificationAsync(schedulingOptions);

    console.log(schedulingOptions);
    }catch(error){
      console.error(error);
      return error;
    }

    
  }

  function handleCategorySelect(val) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    setSelectedCategory(val);
    return val.value;
  }
  
  
  

  return (
      <Modal visible={props.visible} animationType='slide'>
        <ImageBackground source={require("./../assets/noteBook.png")} resizeMode="cover" style={styles.image} >

          <View style={styles.backBox}>
            <Pressable style={styles.topIcon} onPress={props.cancelPressed}>
              <Image style={styles.backIcon} source={require('./../assets/zuruck.png')} />
            </Pressable>

            <Image style={styles.todolistTopLogo} source={require('../assets/todolistTopLogo.jpg')} />

            <Pressable style={styles.topIcon} onPress={props.closeTaskOpenSettings}>
              <Image style={styles.backIcon} source={require('./../assets/user.png')} />
              <Text style={styles.username}>{username}</Text>
            </Pressable>
          </View>
          
          
          <View style={styles.displayView}>

            <View style={styles.addToDoContainer}>
              <Text style={styles.heading} >Add a new Task</Text>
              <TextInput onSubmitEditing={Keyboard.dismiss} value={enteredGoalText} onChangeText={goalInputHandler} style={styles.taskInputField} placeholder='write your task ...' />
             
              <SelectList 
                  setSelected={handleCategorySelect} 
                  data={categoryArray.map(category => ({ label: category.text, value: category.text }))} 
                  save="value"
                  placeholder="Select a category"
                  style={styles.selectList}
                  
              />

              <Text style={styles.heading2}>Enter the termination date</Text>
              <View style={styles.dateTimePicker}>
                <DateTimePicker
                  value={selectedDate}
                  mode='date'
                  is24Hour={true}
                  display='spinner'
                  onChange={handleDateChange}
                  displayFormat={"DD MMM yyyy"}
                />
              </View>

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