import {View, Text, TextInput, ImageBackground, Pressable, Modal, Alert, FlatList} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavbarComponent from './NavbarComponent';
import CategoryItem from './CategoryItem';
import styles from '../styles/StyleSheet';

export default function CategoryModal(props){

    const [categoryArray, setCategoryArray] = useState([]);

    const [categoryEnteredText, setCategoryEnteredText] = useState('');

    // Save data to local storage whenever a state variable changes
    useEffect(() => {
      async function saveData() {
        try {
          const data = JSON.stringify({
            categoryArray,
          });
          await AsyncStorage.setItem('category', data);
          console.log(data + " Data saved!");
        } catch (error) {
          console.log(error);
        }
      }
      saveData();
    }, [categoryArray]);

    // Load data from local storage on app start and when the modal opens
    useEffect(() => {
      async function loadData() {
        try {
          const storedData = await AsyncStorage.getItem('category');
          if (storedData !== null) {
            const data = JSON.parse(storedData);
            setCategoryArray(data.categoryArray);
          }else{
            console.log("Failed to laod the data or no data available");
          }
        } catch (error) {
          console.log(error);
        }
      }
      loadData();
    }, []);

    function addCategoryHandler(text){
      setCategoryEnteredText(text);
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

    function handleDeleteCat(id){
      setCategoryArray((currentCategories) => {
        Alert.alert('Deleted!', 'Category is deleted!');
        return currentCategories.filter((category) => category.id !== id);
      });
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <ImageBackground  source={require("../assets/noteBook.png")} resizeMode="cover" style={styles.image}>

                <Text style={styles.heading}>Categories</Text>

                <View style={styles.addToDoContainer}>
                
                    <TextInput value={categoryEnteredText} onChangeText={addCategoryHandler} style={styles.taskInputField} placeholder='Add a new Category' />
                
                    <Pressable onPress={addCategory} style={styles.getStartedButton}>
                      <Text style={styles.getStartedButtonText}>Add</Text>
                    </Pressable>

                </View>

                <View style={styles.addToDoContainer2}>
                    <Text style={styles.catsHeading}>Current Categories:</Text>
                    <FlatList
                      data={categoryArray}
                      renderItem={({ item }) => (
                        <CategoryItem text={item.text} id={item.id} onDeleteCat={handleDeleteCat} />
                      )}
                      keyExtractor={(item) => item.id}
                    />

                </View>


            </ImageBackground>
            <NavbarComponent onHomePressed={props.onCloseCategoryModal} onStatsPressed={props.onCloseCatOpenStats} onAddTaskPressed={props.onCloseCatOpenTasks} onSettingsPressed={props.onCloseCatOpenSettings}/>
        </Modal>
    );
}
