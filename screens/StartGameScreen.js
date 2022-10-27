import { useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { Colors } from '../utils/colors';
import Card from '../components/Card';

function StartGameScreen(props) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const confirmInput = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
                { text: 'Okay', style: 'destructive', onPress: setEnteredNumber('') },
            ]);
            return;
        }
        setEnteredNumber('');
        props.onNumberEnter(chosenNumber);
    };

    const resetGameState = () => {
        setEnteredNumber('');
    };

    return (
        <View style={styles.wrapper}>
            <Title text='Guess My Number' />
            <Card>
                <Title text='Entered Your Number' />
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType={'number-pad'}
                    value={enteredNumber}
                    onChange={(event) => setEnteredNumber(event.nativeEvent.text)}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={resetGameState}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 16,
    },
    numberInput: {
        fontSize: 32,
        borderBottomColor: Colors.teal,
        borderBottomWidth: 2,
        color: Colors.teal,
        marginBottom: 8,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        fontFamily: 'open-sans-bold',
    },
    button: {
        flex: 1,
        alignItems: 'stretch',
    },
});
