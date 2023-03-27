import {View,Image, Text, StyleSheet, Pressable} from 'react-native';

export default function CategoryItem(props){

    return (
        <View style={styles.catView}>
            <Text style={styles.categoryItem}>{props.text}</Text>
            <Pressable onPress={props.onDeleteCat.bind(this, props.id)}>
                <Image style={styles.trashImage} source={require('./../assets/trash.png')} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryItem: {
        fontSize: 20,
        marginVertical: 5,
        marginLeft: 10,
        textAlign: 'center',
        width: '25%',
      },
      catView:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        textAlign: 'center',
        justifyContent: 'space-evenly',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 5,
      },
      trashImage:{
        width: 30,
        height: 30,
      },
});