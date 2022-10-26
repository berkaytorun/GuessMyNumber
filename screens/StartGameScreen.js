import { useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { Colors } from '../utils/colors';

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
        <View style={styles.inputContainer}>
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
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        padding: 16,
        backgroundColor: Colors.darkslate,
        borderRadius: 10,
        marginHorizontal: 16,
        shadowColor: Colors.darkblue,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.7,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.teal,
        borderBottomWidth: 2,
        color: Colors.teal,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 80,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        flex: 1,
        alignItems: 'stretch',
    },
});
