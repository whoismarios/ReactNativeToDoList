import { StyleSheet, View, ImageBackground, SafeAreaView, FlatList, Alert, Text, Image, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreenModal from './components/WelcomeScreenModal';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import StatsModal from './components/StatsModal';
import SettingsModal from './components/SettingsModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavbarComponent from './components/NavbarComponent';
import CategoryModal from './components/CategoryModal';

export default function App() {
  
  //States for App Data
  const [courseGoals, setCourseGoals] = useState([]);
  const [totalCount, setCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [categoryArray, setCategoryArray] = useState([]);

  //States for the Modal Visibility
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [usernameModalVisibility, setUsernameModalVisibility] = useState(true);
  const [username, setUsername] = useState('');
  const [settingsModalVisible, setSettingsModalVisibility] = useState(false);
  const [statsModalVisible, setStatsModalVisible] = useState(false);
  const [categoryVisible, setCategoryModalVisible] = useState(false);

  // Load data from local storage on app start
  useEffect(() => {
    async function loadData() {
      try {
        const storedData = await AsyncStorage.getItem('appData');
        if (storedData !== null) {
          const data = JSON.parse(storedData);
          setCourseGoals(data.courseGoals);
          setCount(data.totalCount);
          setDoneCount(data.doneCount);
          setUsername(data.username);
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
        const storedData = await AsyncStorage.getItem('category');
        console.log("Stored data: " + storedData);
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

  // Save data to local storage whenever a state variable changes
  useEffect(() => {
    async function saveData() {
      try {
        const data = JSON.stringify({
          courseGoals,
          totalCount,
          doneCount,
          username,
        });
        await AsyncStorage.setItem('appData', data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    saveData();
  }, [courseGoals, totalCount, doneCount, username]);


  //Display the Goal/ Task Input Modal
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  //Close the Goal/ Task Input Modal
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  //Increase Total Count State by One
  function setTotalTasksPlusOne(){
    setCount(totalCount + 1);
  }

  //Increase the Done Count State by One
  function setDoneCountCaller(){
    setDoneCount(doneCount + 1);
  }

  //Decrease the Total Count by One, when a Task gets deleted
  function setTotalTasksMinusOne(){
    setCount(totalCount - 1);
  }

  function addGoalHandler (enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [    ...(currentCourseGoals ?? []), 
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    setTotalTasksPlusOne();
    setModalIsVisible(false);
  }
  

  //Delete a Goal/ Task
  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals) => {
      setTotalTasksMinusOne();
      Alert.alert('Deleted!', 'Task is deleted!');
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  //Goal/ Task is done and gets deleted from the goal-state
  function doneGoalHandler(id){
    setCourseGoals((currentCourseGoals) => {
      setDoneCountCaller();
      Alert.alert('Done!', 'Congratulations, you completed another Task!');
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function handleSaveUsername(usernameEntered){
    setUsernameCaller(usernameEntered);
  }

  function setUsernameCaller(username){
    console.log('Der eingegebene Username lautet: ' + username);
    setUsername(username);

    setUsernameModalVisibilityToFalse();
  }

  function setUsernameModalVisibilityToFalse(){
    setUsernameModalVisibility(false);
  }

  function handleOpenSettingsModalCaller(){
    handleOpenSettingsModal();
  }

  function handleOpenSettingsModal(){
    setSettingsModalVisibility(true);
  }

  function handleOnCloseSettingsModal(){
    setSettingsModalVisibility(false);
  }

  function handleOnResetStats(){
    setDoneCount(0);
    setCount(0);
    Alert.alert('Success!', 'You just resetted your Statistics!');
  }

  function handleOnDeleteTasks(){
    setCourseGoals([]);
    Alert.alert('Success!', 'You just deleted all your Tasks!');
  }

  function handleOnChangeUsername(username){
    setUsername(username);
    Alert.alert('Success!', 'You just changed your Username!');
  }

  function handleOnResetUsername(){
    setUsername('');
    Alert.alert('Success!', 'You just resetted your Username!');
  }

  function setStatsModalVisibleHandler(){
    setStatsModalVisible(true);
  }
  function setAllModalVisibilityToFalse(){
    setStatsModalVisible(false);
    setSettingsModalVisibility(false);
    setUsernameModalVisibility(false);
    setModalIsVisible(false);
    setCategoryModalVisible(false);
  }

  function handleCloseSettingsOpenStats(){
    setAllModalVisibilityToFalse();
    setStatsModalVisible(true);
  }

  function handleCloseSettingsOpenTask(){
    setAllModalVisibilityToFalse();
    setModalIsVisible(true);
  }

  function handleCloseStatsOpenSettings(){
    setAllModalVisibilityToFalse();
    setSettingsModalVisibility(true);
  }

  function handleCloseStatsOpenTask(){
    setAllModalVisibilityToFalse();
    setModalIsVisible(true);
  }

  function handleOnCategoryPressed(){
    setAllModalVisibilityToFalse();
    setCategoryModalVisible(true);
  }

  function handleOnCloseCategory(){
    setAllModalVisibilityToFalse();
    setCategoryModalVisible(false);
  }

  function handleOnCloseCatOpenStats(){
    console.log('Stats Pressed.');
    setAllModalVisibilityToFalse();
    setStatsModalVisible(true);
  }

  function handleOnCloseCatOpenTasks(){
    setAllModalVisibilityToFalse();
    setModalIsVisible(true);
  }

  function handleOnCloseCatOpenSettings(){
    setAllModalVisibilityToFalse();
    setSettingsModalVisibility(true);
  }

  function handleOnCloseStatsOpenCats(){
    setAllModalVisibilityToFalse();
    setCategoryModalVisible(true);
  }

  function handleOnCloseGoalOpenCat(){
    setAllModalVisibilityToFalse();
    setCategoryModalVisible(true);
  }

  function handleOnCloseSettingsOpenCats(){
    setAllModalVisibilityToFalse();
    setCategoryModalVisible(true);
  }


  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <ImageBackground source={require("./assets/noteBook.png")} resizeMode="cover" style={styles.image} >
          <Text style={styles.greeting}>Hallo {username}!</Text>
          

          <WelcomeScreenModal onSave={handleSaveUsername} visible={usernameModalVisibility} />

          <GoalInput onCloseGoalOpenCat={handleOnCloseGoalOpenCat} closeTaskOpenSettings={handleCloseStatsOpenSettings} closeTaskOpenStats={handleCloseSettingsOpenStats} onCancel={endAddGoalHandler} visible={modalIsVisible} onAddGoal={addGoalHandler}  />

          <SettingsModal onCloseSettingsOpenCats={handleOnCloseSettingsOpenCats} onCloseSettingsOpenTask={handleCloseSettingsOpenTask} closeSettingsOpenStats={handleCloseSettingsOpenStats} onResetUsername={handleOnResetUsername} handleChangeUsername={handleOnChangeUsername} onCloseSettingsModal={handleOnCloseSettingsModal} visible={settingsModalVisible} onResetStats={handleOnResetStats} onDeleteTasks={handleOnDeleteTasks} onChangeUsername={handleOnChangeUsername}/>

          <StatsModal closeStatsOpenCat={handleOnCloseStatsOpenCats} visible={statsModalVisible} onCloseStatsOpenTask={handleCloseStatsOpenTask} closeStatsOpenSettings={handleCloseStatsOpenSettings} onHomePressed={setAllModalVisibilityToFalse} />

          <CategoryModal visible={categoryVisible} onCloseCategoryModal={handleOnCloseCategory} onCloseCatOpenStats={handleOnCloseCatOpenStats} onCloseCatOpenTasks={handleOnCloseCatOpenTasks} onCloseCatOpenSettings={handleOnCloseCatOpenSettings} />


          
            <FlatList 
              data={courseGoals} 
              renderItem={(itemData) => {
                return (
                  <GoalItem id={itemData.item.id} onDoneItem={doneGoalHandler} onDeleteItem={deleteGoalHandler} text={itemData.item.text} />
                );
              }} 
              keyExtractor = {(item, index) => { 
                return item.id; 
              }}
              style={styles.taskContainer} alwaysBounceVertical={true}  
              />
          <NavbarComponent onCategoryPressed={handleOnCategoryPressed} onStatsPressed={setStatsModalVisibleHandler} onAddTaskPressed={startAddGoalHandler} onSettingsPressed={handleOpenSettingsModal}
                           
          />

        </ImageBackground>
      </View>
    </>  
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
    width: '100%',
    height: "100%",
    opacity:0.8,
  },
  taskContainer: {
    height: 'auto',
    width: '90%',
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  greeting: {
    textAlign: 'center',
    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
  },
});