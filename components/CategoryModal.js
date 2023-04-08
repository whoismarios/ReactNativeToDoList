import {View, Text, TextInput, ImageBackground, Pressable, Modal, Alert, FlatList, Keyboard, Image} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavbarComponent from './NavbarComponent';
import CategoryItem from './CategoryItem';
import styles from '../styles/CatStyleSheet';
import {UNSPLASH_ACCESS_KEY} from '@env';
import axios from 'axios';

export default function CategoryModal(props){

    const [categoryArray, setCategoryArray] = useState([]);
    const [username, setUsername] = useState('');
    const [categoryEnteredText, setCategoryEnteredText] = useState('');
    var searchTerm = "";
    //const [categoryDeleted, setCategoryDeleted] = useState(false);

    function addCategoryHandler(text){
      setCategoryEnteredText(text);
    }

    function addCatHandler(){
      props.setCategory(categoryEnteredText);
      setCategoryEnteredText('');
      addCategory();
      Keyboard.dismiss();
    }

    function addCategory () {
      if (categoryEnteredText === '') return;
      setCategoryArray((currentCategories) => [
        ...currentCategories, 
        {text: categoryEnteredText, id: Math.random().toString()}
      ]);
      setCategoryEnteredText('');
      console.log(categoryArray);
    }

    useEffect(() => {
    }, [categoryArray]);

    // Load categoryArray from local storage on app start
  useEffect(() => {
    async function loadData() {
      try {
        const storedData = await AsyncStorage.getItem('category');
        console.log("Stored data: " + storedData);
        if (storedData !== null) {
          console.log(storedData);
          const data = JSON.parse(storedData);
          setCategoryArray(data.categoryArray);
          console.log(categoryArray);
          console.log(UNSPLASH_ACCESS_KEY);
        }
      } catch (error) {
        console.log(error);
        console.log("Error");
      }
    }
    loadData();
  }, []);

  // Load username from local storage on app start
  useEffect(() => {
    async function loadData() {
      try {
        const storedData = await AsyncStorage.getItem('appData');
        console.log("Stored data: " + storedData);
        if (storedData !== null) {
          console.log(storedData);
          const data = JSON.parse(storedData);
          setUsername(data.username);
        }
      } catch (error) {
        console.log(error);
        console.log("Error");
      }
    }
    loadData();
  }, []);


  /*
  function deleteCategoryHandler(categoryId) {
    setCategoryArray(currentCategories =>
      currentCategories.filter(category => category.id !== categoryId)
    );
    setCategoryDeleted(!categoryDeleted);
    saveData();
  }

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
    }*/
  

    return (
        <Modal visible={props.visible} animationType='slide'>
            <ImageBackground  source={require("../assets/noteBook.png")} resizeMode="cover" style={styles.image}>
                  
            <View style={styles.backBox}>
              <Pressable style={styles.topIcon} onPress={props.cancelPressed}>
                  <Image style={styles.backIcon} source={require('./../assets/zuruck.png')} />
              </Pressable>

              <Pressable style={styles.topIcon} onPress={props.onCloseCatOpenSettings2}>
                  <Image style={styles.backIcon} source={require('./../assets/user.png')} />
                  <Text style={styles.username}>{username}</Text>
              </Pressable>
            </View>

                <Text style={styles.heading}>Categories</Text>

                <View style={styles.addToDoContainer}>
                
                  <TextInput onSubmitEditing={Keyboard.dismiss} value={categoryEnteredText} onChangeText={addCategoryHandler} style={styles.taskInputField} placeholder='Add a new Category' />
                
                    <Pressable onPress={addCatHandler} style={styles.getStartedButton}>
                      <Text style={styles.getStartedButtonText}>Add</Text>
                    </Pressable>

                </View>

                <View style={styles.addToDoContainer2}>
                    
                   <FlatList
                      horizontal={true}
                      style={styles.flatlistScroll}
                      data={categoryArray}
                      initialNumToRender={categoryArray.length}
                      windowSize={1}
                      renderItem={({ item }) => (

                        
                        

                        <CategoryItem text={item.text} id={item.id} onDeleteCat={props.deleteCat} />
                      )}
                      keyExtractor={(item) => item.id}
                    />

                </View>


            </ImageBackground>
            <NavbarComponent onHomePressed={props.onCloseCategoryModal} onStatsPressed={props.onCloseCatOpenStats} onAddTaskPressed={props.onCloseCatOpenTasks} onSettingsPressed={props.onCloseCatOpenSettings}/>
        </Modal>
    );
}
