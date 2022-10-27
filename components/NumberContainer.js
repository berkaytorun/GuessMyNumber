import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';

function NumberContainer({ number }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{number}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 10,
        marginVertical: 16,
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 35,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'center',
    },
});

export default NumberContainer;
