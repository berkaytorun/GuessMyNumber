import { StyleSheet, ImageBackground, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, useCallback } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { Colors } from './utils/colors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [isGameOver, setIsGameOver] = useState(false);
    const [rounds, setRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
        setIsGameOver(false);
    };
    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <LinearGradient
            colors={[Colors.secondary, Colors.primary]}
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
                    <SafeAreaView
                        onLayout={onLayoutRootView}
                        style={styles.container}
                    >
                        {userNumber && isGameOver ? (
                            <GameOverScreen
                                userNumber={userNumber}
                                roundsNumber={rounds}
                                onStartNewGame={() => {
                                    setUserNumber(null);
                                    setIsGameOver(false);
                                    setRounds(0);
                                }}
                            />
                        ) : userNumber ? (
                            <GameScreen
                                isGameOver={setIsGameOver}
                                userNumber={userNumber}
                                onSetRounds={setRounds}
                            />
                        ) : (
                            <StartGameScreen onNumberEnter={startGameHandler} />
                        )}
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
