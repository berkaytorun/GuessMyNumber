import { Image, Text, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { Colors } from '../utils/colors';
function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
    return (
        <View style={styles.wrapper}>
            <Title text='Game Over' />
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.png')}
                />
            </View>
            <Text style={styles.text}>
                Your phone guessed <Text style={styles.highlight}>{userNumber}</Text>
                {'\n'}
                in rounds <Text style={styles.highlight}>{roundsNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start a New Game</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.slate,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 20,
        marginBottom: 10,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary,
    },
});

export default GameOverScreen;
