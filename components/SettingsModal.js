import { View, Text, TextInput, ImageBackground, Modal, Pressable, Image } from 'react-native';
import { useState, useEffect } from 'react';
import NavbarComponent from './NavbarComponent'
import styles from '../styles/SettingsStyleSheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsModal(props) {

  const [username, setUsername] = useState('');

  function onChangeUsername(newUsername) {
    setUsername(newUsername);
    console.log(newUsername);
  }

  function handleChangeUsername() {
    if (props.onChangeUsername) {
      props.onChangeUsername(username);
    }
    setUsername('');
  }

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
        <View style={styles.wholeBox}>
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

        <Text style={styles.heading}>Settings</Text>

          <View style={styles.body}>

            <View style={styles.row}>
              <Text style={styles.label}>Reset Statistics</Text>
              <Pressable style={styles.button} onPress={props.onResetStats}>
                <Text style={styles.buttonText}>Reset</Text>
              </Pressable>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Delete all Tasks</Text>
              <Pressable style={styles.button} onPress={props.onDeleteTasks}>
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Delete all Categories</Text>
              <Pressable style={styles.button} onPress={props.onDeleteCategories}>
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
            </View>

            <View style={styles.row}>
              <TextInput placeholder='Change Username' placeholderTextColor={'grey'} style={[styles.label, styles.input]} onChangeText={onChangeUsername} />
              <Pressable style={styles.button} onPress={handleChangeUsername}>
                <Text style={styles.buttonText}>Change</Text>
              </Pressable>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Reset Username</Text>
              <Pressable style={styles.button} onPress={props.onResetUsername}>
                <Text style={styles.buttonText}>Reset</Text>
              </Pressable>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Reset All</Text>
              <Pressable style={styles.button} onPress={props.onResetAll}>
                <Text style={styles.buttonText}>Reset</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
      <NavbarComponent onCategoryPressed={props.onCloseSettingsOpenCats} onHomePressed={props.onCloseSettingsModal} onStatsPressed={props.closeSettingsOpenStats} onAddTaskPressed={props.onCloseSettingsOpenTask} />
    </Modal>
  );
}