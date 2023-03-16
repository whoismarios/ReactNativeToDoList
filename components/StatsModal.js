import { StyleSheet, Modal, ImageBackground, View, Text, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PieChart } from 'react-native-chart-kit';


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


const styles = StyleSheet.create({
    heading:{
        fontSize: 60,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 0,
    },
    backgroundImage:{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        opacity: 0.8,
    },
    statsView: {
        flex: 2,
        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        height: '80%',
    },
    statsTextContainer:{
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: -400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    statsText:{
        fontSize: 22,
        fontWeight: 'bold',
    },
    pieChart:{
        marginTop: -200,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'grey',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }
});