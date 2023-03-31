import { View, Text, TextInput, ImageBackground, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import NavbarComponent from './NavbarComponent'
import styles from '../styles/SettingsStyleSheet';

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
  
  return (
    <Modal visible={props.visible} animationType='slide'>
      <ImageBackground  source={require("../assets/noteBook.png")} resizeMode="cover" style={styles.image}>

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
          </View>
      </ImageBackground>
      <NavbarComponent onCategoryPressed={props.onCloseSettingsOpenCats} onHomePressed={props.onCloseSettingsModal} onStatsPressed={props.closeSettingsOpenStats} onAddTaskPressed={props.onCloseSettingsOpenTask} />
    </Modal>
  );
}