import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import Card from '../components/Card';
import LogItem from '../components/LogItem';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';

const generateRandomNumber = (min, max, exclude, userNumber) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === userNumber) {
        return userNumber;
    }
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude, userNumber);
    } else {
        return randomNumber;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, isGameOver, onSetRounds }) {
    const initialGuess = generateRandomNumber(minBoundary, maxBoundary, userNumber, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [rounds, setRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            minBoundary = 1;
            maxBoundary = 100;
            onSetRounds(rounds.length);
            isGameOver(true);
        }
    }, [currentGuess, userNumber, isGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert('Are you dumb', "don't you remember your number", [
                { text: 'Try Again', style: 'destructive' },
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
            if (minBoundary === maxBoundary) {
                return;
            }
        } else if (direction === 'greater') {
            minBoundary = currentGuess + 1;
            if (minBoundary > maxBoundary) {
                minBoundary--;
            }
        }
        if (minBoundary === maxBoundary) {
            return;
        }

        const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess, userNumber);
        setCurrentGuess(newRandomNumber);
        setRounds((currentRounds) => [newRandomNumber, ...currentRounds]);
    };

    return (
        <View style={styles.container}>
            <Title text="Opponent's Guess" />
            <NumberContainer number={currentGuess} />
            <Card>
                <Title text='Higher Or Lower ?' />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>Less</PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={() => nextGuessHandler('greater')}>More</PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={rounds}
                    renderItem={(itemData) => (
                        <LogItem
                            roundNumber={rounds.length - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        alignItems: 'stretch',
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
});

export default GameScreen;
