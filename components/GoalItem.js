import { StyleSheet, View, Text } from "react-native";
import styles from "../styles/GoalItemStyleSheet";

export default function GoalItem (props){

    return (
        <View style={styles.singleTaskContainer}>
            <Text style={styles.task2}>{props.text}</Text>
            <View style={styles.buttonBox}>
                <Text style={styles.doneButton} title='Done' onPress={props.onDoneItem.bind(this, props.id)}>Done</Text>
                <Text style={styles.deleteButton} title='Delete' onPress={props.onDeleteItem.bind(this, props.id)} >Delete</Text>
            </View>
        </View>
    );
}