import { View, Text, StyleSheet, Pressable } from 'react-native';

function PrimaryButton(props) {
    return (
        <View style={styles.buttonWrapper}>
            <Pressable
                onPress={props.onPress}
                style={({ pressed }) => (pressed ? [styles.buttonPressed, styles.button] : styles.button)}
            >
                <Text style={styles.texts}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonWrapper: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: 'purple',
        padding: 8,
        width: 100,
        alignItems: 'center',
    },
    buttonPressed: {
        opacity: 0.7,
    },
    texts: {
        color: 'moccasin',
    },
});
