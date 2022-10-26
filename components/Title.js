import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';

function Title({ text }) {
    return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 10,
        padding: 8,
        marginVertical: 16,
    },
});

export default Title;
