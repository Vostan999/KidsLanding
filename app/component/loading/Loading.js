import React from 'react';
import { ActivityIndicator, Modal, Platform, StyleSheet,Alert } from 'react-native';

function Loading(props) {

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.loading}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <ActivityIndicator
                style={[styles.containerStyle, props.style]}
                size={Platform.OS === 'android' ? props.size : (props.size > 30 ? "large" : "small")}
                color={'#D56638'}
            />
        </Modal>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(236, 236, 236, 0.5)'
    }
})

export default Loading;
