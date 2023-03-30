import {View, Text, TextInput, ImageBackground, Pressable, Modal, Alert, FlatList} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavbarComponent from './NavbarComponent';
import CategoryItem from './CategoryItem';
import styles from '../styles/StyleSheet';

export default function CategoryModal(props){

    const [categoryArray, setCategoryArray] = useState([]);

    const [categoryEnteredText, setCategoryEnteredText] = useState('');
    

    function addCategoryHandler(text){
      setCategoryEnteredText(text);
    }

    function addCatHandler(){
      props.setCategory(categoryEnteredText);
      setCategoryEnteredText('');
      addCategory();
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
        //TODO: Add Prop to App Component to update state in localstorage?
        return currentCategories.filter((category) => category.id !== id);
      });
    }

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

    

    return (
        <Modal visible={props.visible} animationType='slide'>
            <ImageBackground  source={require("../assets/noteBook.png")} resizeMode="cover" style={styles.image}>

                <Text style={styles.heading}>Categories</Text>

                <View style={styles.addToDoContainer}>
                
                    <TextInput value={categoryEnteredText} onChangeText={addCategoryHandler} style={styles.taskInputField} placeholder='Add a new Category' />
                
                    <Pressable onPress={addCatHandler} style={styles.getStartedButton}>
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
