import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState();

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
    };

    if (userNumber) {
    }

    return (
        <LinearGradient
            colors={['#8b0000', '#9acd32']}
            style={styles.container}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}
            >
                <ImageBackground
                    resizeMode='cover'
                    style={styles.container}
                    source={require('./assets/images/background.png')}
                    imageStyle={styles.image}
                >
                    <SafeAreaView style={styles.container}>
                        {userNumber ? <GameScreen /> : <StartGameScreen onNumberEnter={startGameHandler} />}
                    </SafeAreaView>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        opacity: 0.3,
    },
});
