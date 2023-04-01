import React, { useState, useEffect } from 'react';
import { View, Modal, Button, StyleSheet, Text, TextInput, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/WelcomeModalStyleSheet';
import * as Haptics from 'expo-haptics';


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
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success)
    }
  }

  if (username) {
    // If the username is set, return null to prevent rendering the modal
    Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Success)
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