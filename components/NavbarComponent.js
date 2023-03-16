import { StyleSheet, View, Image, Pressable } from "react-native";

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

const styles = StyleSheet.create({
    navbar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#ffffff',
        bottom: 0,
        marginTop: -120,
        height:120,
        alignItems: 'center',
      },
      shadowProps: {
        shadowColor: '#171717',
        shadowOffset: {width: 15, height: 20},
        shadowOpacity: 0.8,
        shadowRadius: 100,
      },
      navbarIcon:{
        width:45,
        height:45,
      },
      navbarIconPlus:{
        marginBottom:90,
        backgroundColor: '#ffffff',
        borderColor: '#5CCB7A',
        borderWidth: 4,
        borderRadius:30,
        alignItems: 'center',
        width: 90,
        height: 90,
      },
      iconViewWrapper:{
        width:55,
        height:55,
        alignItems: 'center',
        justifyContent: 'center',
      },
});