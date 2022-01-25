import React from "react";
import {
    StyleSheet,
    View,
    ActivityIndicator,
} from "react-native";

 function Loading(props) {

    return (
        props.loading ?
            <View style={[styles.content, props.style]}>
                <ActivityIndicator
                    size={40}
                    color={'#D56638'}
                />
            </View>
            : null
    );
}

const styles = StyleSheet.create({
    content: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        minHeight: 50,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        backgroundColor:"rgba(255, 255, 255, 0.5)",
    },
});
export default Loading
