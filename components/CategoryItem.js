import {View,Image, Text, StyleSheet, Pressable} from 'react-native';
import styles from '../styles/CatItemStyleSheet';

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