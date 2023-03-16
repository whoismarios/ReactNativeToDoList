import { StyleSheet, View, Text, TextInput, ImageBackground, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import NavbarComponent from './NavbarComponent'

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

const styles = StyleSheet.create({
  
  heading:{
    fontSize: 60,
    textAlign: 'center',
    marginTop: -250,
    marginBottom: 100,
  },
  image: {
    flex: 3,
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    opacity: 0.8,
  },
  body: {
    height: '30%',
    marginVertical: 20,
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    opacity: 0.9,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 22,
    width: '40%',
    
    fontWeight: 'bold',
    flex: 1,
    padding: 10,
  },
  input:{
    borderWidth: 1,
    borderColor: 'black',
    width: '40%',
    height: 40,
    padding: 10,
    fontWeight: 'normal',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: 100,
    textAlign: 'center',
    flex: 0.5,
    marginLeft: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
});
