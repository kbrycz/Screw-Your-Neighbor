import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'
import * as Color from '../../global/Color'


const PlayerItemComponent = ({player, index, addNewPlayer, lastIndex}) => {

    // Gets the correct container color for even / odd
    const containerStyle = (val) => {
        // Even number
        if (val % 2 == 0) {
            return {
                backgroundColor: 'rgba(83, 134, 46, 0.5)',
            }
        } else {
            return {
                backgroundColor: 'rgba(67, 109, 37, 0.5)'
            }
        }
    }

    const renderComponent = () => {
        if (index !== lastIndex) {
            return (<View style={[styles.container, containerStyle(index)]}>
                        <Text style={styles.name}>Billy</Text>
                        <Text style={styles.username}>asdfas</Text>
                    </View>)
        }
        else {
            return <>
                    <View style={[styles.container, containerStyle(lastIndex)]}>
                        <Text style={styles.name}>Billy</Text>
                        <Text style={styles.username}>asdfas</Text>
                    </View>
                    <View style={[styles.container, containerStyle(lastIndex + 1)]}>
                        <TouchableOpacity onPress={addNewPlayer}>
                            <Text>Add player</Text>
                        </TouchableOpacity>
                    </View>
            </>
        }
    }

    return (
        <>
            {renderComponent()}
        </>
        
    )
}

const styles = StyleSheet.create({
    container: {
        padding:  Dimensions.get('window').height * .02,
        flexDirection: 'row',
    }, 
    name: {
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: Dimensions.get('window').height * .03,
        flex: 2,
        marginLeft: Dimensions.get('window').width * .03,
    },
    username: {
        color: '#fff',
        fontSize: Dimensions.get('window').height * .02,
        flex: 1,
    }

})

export default PlayerItemComponent;