import React, { useState, useEffect } from 'react';
import { View, Modal, Button, StyleSheet, Text, TextInput, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';


export default function WelcomeScreenModal(props) {
  const [username, setUsername] = useState('');

  // Load data from local storage on app start
  useEffect(() => {
    async function loadData() {
      try {
        const storedData = await AsyncStorage.getItem('appData');
        if (storedData !== null) {
          const data = JSON.parse(storedData);
          setUsername(data.username.toString());
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);

  const [inputValue, setInputValue] = useState('');

  function usernameInputHandler(newUsername) {
    setInputValue(newUsername);
  }

  function handleSaveUsername() {
    if (inputValue) {
      setUsername(inputValue);
      setInputValue('');
      props.onSave(inputValue);
    }
  }

  if (username) {
    // If the username is set, return null to prevent rendering the modal
    return null;
  }

  return (
    <>
    <StatusBar style='dark'/>
    <Modal visible={props.visible} animationType={'fade'} style={styles.wholeModal}>
        <View style={styles.modalTop}>
          <Image source={require('./../assets/noteBook.png')} resizeMode="cover" style={styles.topImage} />
        </View>
        <View style={[styles.modalContainer, styles.shadowProps]}>
          <Image source={require('./../assets/toDoListLogo.gif')} resizeMode="cover" style={[styles.logo, styles.shadowProps]} />
          <View style={styles.imageContainer}>
            <View style={[styles.images]}>
              <Image style={styles.actualImage} source={require('./../assets/startScreen/to-do-list.png')} />
            </View>
            <View style={styles.images}>
              <Image style={styles.actualImage} source={require('./../assets/startScreen/graph.png')} />
            </View>
            <View style={styles.images}>
              <Image style={styles.actualImage} source={require('./../assets/startScreen/mechanical-gears.png')} />
            </View>
          </View>
          <Text style={styles.title}></Text>
          <TextInput
            style={styles.textInput}
            value={inputValue}
            onChangeText={usernameInputHandler}
            placeholder={'Enter your Username'}
            placeholderTextColor={'black'}
          />
          <Pressable style={styles.getStartedButton} title="Get Started" onPress={handleSaveUsername}>
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </Pressable>
        </View>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: -180,
  },
  images:{
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actualImage: {
    width:60,
    height:60,
  },
  modalTop:{
    flex: 1,
    width: '100%',
    opacity: 0.8,
  },
  topImage:{
    width: '100%',
  },
  logo:{
    width: 275,
    height: 275,
    marginTop: -100,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 200
  },
  getStartedButton:{
    width: '60%',
    borderWidth: 1, 
    borderColor: 'blue',
    borderRadius: 25,
    backgroundColor: 'black',
    borderColor: 'black',
  },
  getStartedButtonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 22,
  },  
  modalContainer: {
    flex:1.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    opacity: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  shadowProps: {
    shadowColor: '#171717',
    shadowOffset: {width: 15, height: 20},
    shadowOpacity: 0.8,
    shadowRadius: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 200,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor: '#ced4da',
    color: 'black',
    textAlign: 'center',
    borderRadius: 25,
    padding: 10,
    width: '100%',
    marginBottom: 20,
    fontSize: 18,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: "auto",
    opacity:0.8,
  },
});
