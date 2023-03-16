import {View, Text, TextInput, ImageBackground, Pressable, StyleSheet, Modal, Alert} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavbarComponent from './NavbarComponent';

export default function CategoryModal(props){

    const [categoryArray, setCategory] = useState([]);

    function displayAlert(){
      Alert.alert('Not implemented yet!', 'This function will be soon available!');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <ImageBackground  source={require("../assets/noteBook.png")} resizeMode="cover" style={styles.image}>

                <Text style={styles.heading}>Categories</Text>

                <View style={styles.addToDoContainer}>
                
                    <TextInput  style={styles.taskInputField} placeholder='Add a new Category' />
                
                    <Pressable onPress={displayAlert} style={styles.getStartedButton}>
                    <Text style={styles.getStartedButtonText}>Add</Text>
                    </Pressable>

                </View>

                <View style={styles.addToDoContainer2}>
                    <Text style={styles.catsHeading}>Current Categories:</Text>
                </View>

            </ImageBackground>
            <NavbarComponent onHomePressed={props.onCloseCategoryModal} onStatsPressed={props.onCloseCatOpenStats} onAddTaskPressed={props.onCloseCatOpenTasks} onSettingsPressed={props.onCloseCatOpenSettings}/>
        </Modal>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: "auto",
        opacity:0.8,
      },
      heading:{
        fontSize: 60,
        textAlign: 'center',
        marginTop: -200, 
      },
      catsHeading:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
      },
      addToDoContainer: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '20%',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 5,
        marginVertical:50,
      },
      addToDoContainer2: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '25%',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 5,
        marginTop: 25,
        marginVertical:-100,
      },
      taskInputField: {
        width: '90%',
        height: '20%',
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