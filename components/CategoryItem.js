import { View, Image, Text, Pressable } from 'react-native';
import styles from '../styles/CatItemStyleSheet';

export default function CategoryItem(props) {
  return (
    <View style={styles.catView}>
      <Image style={styles.images} source={{ uri: props.photoUrl }} />
      <View style={styles.textView}>
        <Text style={styles.categoryItem}>{props.text}</Text>
        <Pressable onPress={props.onDeleteCat.bind(this, props.id)}>
          <Image style={styles.trashImage} source={require('./../assets/trash.png')} />
        </Pressable>
      </View>
    </View>
  );
}
