import { View, ImageBackground, FlatList, Alert, Text } from 'react-native';
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
import styles from './styles/AppStyleSheet';

export default function App() {
  
  //States for App Data
  const [courseGoals, setCourseGoals] = useState([]);
  const [totalCount, setCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [categoryArray, setCategoryArray] = useState([]);

  const [categoryEnteredText, setCategoryEnteredText] = useState('');

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
    loadData();
  }, []);
  
    async function loadData() {
      try {
        const storedData = await AsyncStorage.getItem('category');
        if (storedData !== null) {
          const data = JSON.parse(storedData);
          setCategoryArray(data.categoryArray);
        }
      } catch (error) {
        console.log(error);
        console.log("Error");
      }
    }
  // Save data to local storage whenever a state variable changes
  useEffect(() => {
    async function saveData() {
      try {
        const data = JSON.stringify({
          courseGoals,
          totalCount,
          doneCount,
          username,
          categoryArray
        });
        await AsyncStorage.setItem('appData', data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    saveData();
  }, [courseGoals, totalCount, doneCount, username, categoryArray]);

  // Save data to local storage whenever a state variable changes
  useEffect(() => {
    saveData();
    
  }, [categoryArray]);

async function saveData() {
      try {
        const data = JSON.stringify({
          categoryArray,
        });
        await AsyncStorage.setItem('category', data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    

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

  function addGoalHandler(enteredGoalText, selectedCategory ) {
    console.log("Identify: " + enteredGoalText);
    console.log("Identify: " + selectedCategory);
    setCourseGoals((currentCourseGoals) => [
      ...(currentCourseGoals ?? []),
      { text: enteredGoalText, category: selectedCategory, id: Math.random().toString() },
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


  function handleDeleteCat(id){
    setCategoryArray((currentCategories) => {
      Alert.alert('Deleted!', 'Category is deleted!');
      //TODO: Add Prop to App Component to update state in localstorage?
      
      return currentCategories.filter((category) => category.id !== id);

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
    setUsername(username);
    setUsernameModalVisibilityToFalse();
  }

  function setUsernameModalVisibilityToFalse(){
    setUsernameModalVisibility(false);
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

  function onSetCategoryHandler(categoryEnteredText){
    if (categoryEnteredText === '') return;
      setCategoryArray((currentCategories) => [
        ...currentCategories, 
        {text: categoryEnteredText, id: Math.random().toString()}
      ]);
      setCategoryEnteredText('');
  }

  function handleOnCancelPressed(){
    setAllModalVisibilityToFalse();
  }

  function handleOnDeleteCategories(){
    setCategoryArray([]);
  }

  


  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <ImageBackground source={require("./assets/noteBook.png")} resizeMode="cover" style={styles.image} >
          <Text style={styles.greeting}>Hallo {username}!</Text>
          

          <WelcomeScreenModal onSave={handleSaveUsername} visible={usernameModalVisibility} />

          <GoalInput cancelPressed={handleOnCancelPressed} onCloseGoalOpenCat={handleOnCloseGoalOpenCat} closeTaskOpenSettings={handleCloseStatsOpenSettings} closeTaskOpenStats={handleCloseSettingsOpenStats} onCancel={endAddGoalHandler} visible={modalIsVisible} onAddGoal={addGoalHandler}  />

          <SettingsModal onDeleteCategories={handleOnDeleteCategories} cancelPressed={handleOnCancelPressed} onCloseSettingsOpenCats={handleOnCloseSettingsOpenCats} onCloseSettingsOpenTask={handleCloseSettingsOpenTask} closeSettingsOpenStats={handleCloseSettingsOpenStats} onResetUsername={handleOnResetUsername} handleChangeUsername={handleOnChangeUsername} onCloseSettingsModal={handleOnCloseSettingsModal} visible={settingsModalVisible} onResetStats={handleOnResetStats} onDeleteTasks={handleOnDeleteTasks} onChangeUsername={handleOnChangeUsername}/>

          <StatsModal cancelPressed={handleOnCancelPressed} closeStatsOpenCat={handleOnCloseStatsOpenCats} visible={statsModalVisible} onCloseStatsOpenTask={handleCloseStatsOpenTask} closeStatsOpenSettings={handleCloseStatsOpenSettings} onHomePressed={setAllModalVisibilityToFalse} />

          <CategoryModal deleteCat={handleDeleteCat} cancelPressed={handleOnCancelPressed} setCategory={onSetCategoryHandler} visible={categoryVisible} onCloseCategoryModal={handleOnCloseCategory} onCloseCatOpenStats={handleOnCloseCatOpenStats} onCloseCatOpenTasks={handleOnCloseCatOpenTasks} onCloseCatOpenSettings={handleOnCloseCatOpenSettings} />


          
            <FlatList 
              data={courseGoals} 
              renderItem={(itemData) => {
                return (
                  <GoalItem id={itemData.item.id} onDoneItem={doneGoalHandler} onDeleteItem={deleteGoalHandler} text={itemData.item.text} category={itemData.item.category} />
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