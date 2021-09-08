import React from 'react'
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import * as Color from '../../global/Color'

const GameHeaderComponent = () => {

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.titleContainer}>
                    <Text style={styles.title}>Restart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.titleContainer}>
                    <Text style={styles.title}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.titleContainer}>
                    <Text style={styles.title}>History</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={styles.round}>Round 1</Text>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        opacity: 1
    },
    titleContainer: {
        flex: 1,
    },

    title: {
        paddingTop: Dimensions.get('window').height * .02,
        paddingBottom: Dimensions.get('window').height * .02,
        fontSize: Dimensions.get('window').width * .035,
        borderWidth: 1,
        borderColor: Color.DARKER,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: Color.DARK,
        color: '#feefe0',
    },
    round: {
        paddingTop: Dimensions.get('window').height * .02,
        paddingBottom: Dimensions.get('window').height * .02,
        fontSize: Dimensions.get('window').width * .035,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: Color.DARKER,
        color: '#feefe0',
    }
})

export default GameHeaderComponent