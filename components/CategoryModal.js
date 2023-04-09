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

  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      var newPhotoUrls = [];
      for (const category of categoryArray) {
        const searchTerm = category.text;
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${UNSPLASH_ACCESS_KEY}`);
        const photos = response.data.results;
        const firstPhoto = photos.shift();
        const photoUrl = firstPhoto.urls.regular;
        newPhotoUrls.push(photoUrl.toString());
        //newPhotoUrls[String(category.id)] = photoUrl.toString();

        console.log("URL: " + photoUrl);
        console.log("The array: " + newPhotoUrls);
       
      }
      setPhotoUrls(newPhotoUrls);
       console.log("The State Array: " + photoUrls);
    };
    fetchData();
  }, [categoryArray]);

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
        }
      } catch (error) {
        console.log(error);
        console.log("Error");
      }
    }
    loadData();
  }, []);

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
  
    return (
      <Modal visible={props.visible} animationType='slide'>
          <ImageBackground  source={require("../assets/noteBook.png")} resizeMode="cover" style={styles.image}>
                
          <View style={styles.backBox}>
            <Pressable style={styles.topIcon} onPress={props.cancelPressed}>
                <Image style={styles.backIcon} source={require('./../assets/zuruck.png')} />
            </Pressable>

            <Image style={styles.todolistTopLogo} source={require('../assets/todolistTopLogo.jpg')} />
  
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
                  style={{ paddingVertical: 10 }}
                  data={categoryArray}
                  
                  renderItem={({ item, index }) => (
                    
                    <CategoryItem photoUrl={photoUrls[index]} text={item.text} id={item.id} onDeleteCat={props.deleteCat} />

                  )}
                  keyExtractor={(item) => item.id}
                />
  
              </View>
          </ImageBackground>
          <NavbarComponent onHomePressed={props.onCloseCategoryModal} onStatsPressed={props.onCloseCatOpenStats} onAddTaskPressed={props.onCloseCatOpenTasks} onSettingsPressed={props.onCloseCatOpenSettings}/>
      </Modal>
  );
  
}
