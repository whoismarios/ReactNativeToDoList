import { Pressable, Image, Modal, ImageBackground, View, Text, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PieChart } from 'react-native-chart-kit';
import styles from '../styles/StatsModalStyleSheet';


export default function StatsModal(props){
    const [totalCount, setCount] = useState(0);
    const [doneCount, setDoneCount] = useState(0);
    const [username, setUsername] = useState('');

    const [pieChartData, setPieChartData] = useState([]);


    // Load data from local storage
    useEffect(() => {
        async function loadData() {
            try {
                const storedData = await AsyncStorage.getItem('appData');
                if (storedData !== null) {
                    const data = JSON.parse(storedData);
                    setCount(data.totalCount);
                    setDoneCount(data.doneCount);
                    setUsername(data.username);
                }
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
    }, []);

    // Watch for changes in totalCount, doneCount, and username and update component
    useEffect(() => {
    }, [totalCount, doneCount, username]);

    function handleOnHomePressed(){
        props.onHomePressed(false);
    }

    useEffect(() => {
        const completionPercentage = 100 * (doneCount / totalCount);
        //const roundedcompletionPercentage = completionPercentage.toFixed(2);
        const data = [    {      
                            name: ' % Done',      
                            population: completionPercentage,      
                            color: '#89c2d9',      
                            legendFontColor: '#7F7F7F',      
                            legendFontSize: 16,    
                        },    
                        {   name: ' % Remaining',      
                            population: 100 - completionPercentage,      
                            color: '#01497c',      
                            legendFontColor: '#7F7F7F',      
                            legendFontSize: 16,    
                        },  ];
        setPieChartData(data);
      }, [doneCount, totalCount]);
      

    function updateUI(){
        async function loadData() {
            try {
                const storedData = await AsyncStorage.getItem('appData');
                if (storedData !== null) {
                    const data = JSON.parse(storedData);
                    setCount(data.totalCount);
                    setDoneCount(data.doneCount);
                    setUsername(data.username);
                }
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
    }
    

    return (
        <Modal visible={props.visible} animationType='slide'>
            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('./../assets/noteBook.png')}>
                <Pressable style={styles.backBox} onPress={props.cancelPressed}>
                    <Image style={styles.backIcon} source={require('./../assets/zuruck.png')} />
                </Pressable>
                <Text style={styles.heading}>Statistics</Text>
                <View style={styles.statsView}>
                    <PieChart
                        data={pieChartData}
                        width={Dimensions.get('window').width - 20}
                        height={250}
                        chartConfig={{
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        }}
                        accessor="population"
                        backgroundColor="transparent"
                        absolute
                        style={styles.pieChart}
                        
                    />
                </View>
                <View style={styles.statsTextContainer}>
                    <Text style={styles.statsText} onPress={updateUI()}>Total Tasks: {totalCount}</Text>
                    <Text style={styles.statsText}>Done: {doneCount}</Text>
                    <Text style={styles.statsText}>Tasks Left: {totalCount - doneCount}</Text>
                </View>
            </ImageBackground>
            
            <NavbarComponent onCategoryPressed={props.closeStatsOpenCat} onHomePressed={handleOnHomePressed} onSettingsPressed={props.closeStatsOpenSettings} onAddTaskPressed={props.onCloseStatsOpenTask} />
        </Modal>
    );
}