import { View, Text, Animated, Pressable } from "react-native";
import styles from "../styles/GoalItemStyleSheet";
import { Swipeable } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

const LeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
        inputRange: [0,100],
        outputRange:[0,1],
        extrapolate: 'clamp',
    });
    return(
        <View style={styles.leftAction}>
            <Animated.Text style={[styles.leftText, {transform: [{scale}]}]}>Done</Animated.Text>
        </View>
    ); 
};

const RightActions = ({progress, dragX, onPress}) => {
    const scale = dragX.interpolate({
        inputRange: [-100,0],
        outputRange:[1,0],
        extrapolate: 'clamp',
    });
    return(
        <Pressable onPress={onPress}>
            <View style={styles.rightAction}>
                <Animated.Text style={[styles.rightText, {transform: [{scale}]}]}>Delete</Animated.Text>
            </View>
        </Pressable>
    );
};

export default function GoalItem(props) {
    return (
        <Swipeable renderLeftActions={LeftActions} 
                    onSwipeableLeftOpen={props.onDoneItem.bind(this, props.id)} 
                    renderRightActions={(progress, dragX) => <RightActions progress={progress} dragX={dragX} onPress={props.onDeleteItem.bind(this, props.id)}/>} 
                    onSwipableRightOpen={props.onSwipeFromRight}
        >
            <View style={styles.singleTaskContainer}>
                <Text style={styles.task2}>{props.text}</Text>
                <Text style={styles.task2}>{props.category}</Text>
                <Text style={styles.task2}>{new Date(props.terminationDate).toLocaleDateString('en-GB')}</Text>
                
            </View>
        </Swipeable>
    );
}
