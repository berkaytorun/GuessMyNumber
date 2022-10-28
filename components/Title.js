import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';

function Title({ text }) {
    return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.moccasin,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.darkslate,
        borderRadius: 10,
        padding: 8,
        margin: 18,
        maxWidth: '80%',
        width: 300,
    },
});

export default Title;
