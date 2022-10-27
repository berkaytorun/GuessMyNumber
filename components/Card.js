import { View, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';

function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        marginTop: 50,
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
});

export default Card;
