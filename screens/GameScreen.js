import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
    return (
        <View style={styles.container}>
            <Title text="Opponent's Guess" />
            <View>
                <Text>Higher/Lower</Text>
            </View>
            <View>
                <Text>My Guess</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default GameScreen;
