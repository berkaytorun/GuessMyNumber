import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';

function LogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}># {roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.darkslate,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 10,
        backgroundColor: Colors.slate,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 5,
        shadowColor: Colors.teal,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    itemText: {
        color: Colors.white,
        fontFamily: 'open-sans-bold',
    },
});
export default LogItem;
