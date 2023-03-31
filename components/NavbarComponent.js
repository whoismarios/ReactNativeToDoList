import { View, Image, Pressable } from "react-native";
import styles from "../styles/NavbarStyleSheet";

export default function NavbarComponent(props){
    return (
        <View style={[styles.navbar, styles.shadowProps]}>

            <View style={styles.iconViewWrapper}>
              <Pressable title='Open Settings' onPress={props.onHomePressed}>
                <Image style={styles.navbarIcon} source={require('./../assets/navbar/home.png')} />
              </Pressable>
            </View>

            <View style={styles.iconViewWrapper}>
              <Pressable title='Open Settings' onPress={props.onStatsPressed} >
                <Image style={styles.navbarIcon} source={require('./../assets/navbar/graph.png')} />
              </Pressable>
            </View>  

            <View style={[styles.iconViewWrapper, styles.navbarIconPlus]}> 
              <Pressable title='Open Settings' onPress={props.onAddTaskPressed} >
                <Image style={styles.navbarIcon} source={require('./../assets/navbar/plus.png')} />
              </Pressable>
            </View>

            <View style={styles.iconViewWrapper}>
              <Pressable title='Open Settings' onPress={props.onCategoryPressed} >
                <Image style={styles.navbarIcon} source={require('./../assets/navbar/options-lines.png')} />
              </Pressable>
            </View>
            
            <View style={styles.iconViewWrapper}>
              <Pressable title='Open Settings' onPress={props.onSettingsPressed} >
                <Image style={styles.navbarIcon} source={require('./../assets/navbar/setting.png')} />
              </Pressable>
            </View>

          </View>
    );
}