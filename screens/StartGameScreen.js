import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType={'number-pad'}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        padding: 16,
        backgroundColor: 'darkred',
        borderRadius: 10,
        marginHorizontal: 16,
        shadowColor: 'darkblue',
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
        borderBottomColor: 'teal',
        borderBottomWidth: 2,
        color: 'teal',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 80,
        textAlign: 'center',
    },
});
