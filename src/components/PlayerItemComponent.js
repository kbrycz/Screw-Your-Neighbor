import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions, TextInput, Keyboard} from 'react-native'
import * as Color from '../../global/Color'
import { Feather } from '@expo/vector-icons'; 
import DeleteUserModalComponent from './DeleteUserModalComponent';
import AddPlayerComponent from './AddPlayerComponent';


const PlayerItemComponent = ({player, index, addNewPlayer, lastIndex, setName, scoreChange, round, deletePlayer}) => {

    const [modalVisible, setModalVisible] = React.useState(false)

    // Helper function for delete player. Adds the index
    const deletePlayerTemp = () => {
        deletePlayer(index)
    }

    // Gets the correct container color for even / odd
    const containerStyle = (val) => {
        // Even number
        if (val % 2 == 0) {
            return {
                backgroundColor: Color.MAIN,
                opacity: .8
            }
        } else {
            return {
                backgroundColor: Color.MAIN,
                opacity: .8
            }
        }
    }

    // Checks whether the player has already clicked a score
    const isDone = () => {
        if (player.status) {
            return {
                backgroundColor: Color.DONE,
                opacity: .8
            }
        }
    }

    // Gets the text input / top part of the player component
    const renderTextInput = () => {
        return <View style={[styles.nameContainer, isDone()]}>
            
                    <TextInput
                    maxLength={12}
                    onSubmitEditing={() => { Keyboard.dismiss() }}
                    autoCompleteType="off"
                    keyboardType="default"
                    autoCorrect={false}
                    style={styles.textInput}
                    returnKeyType="done"
                    value={player.name}
                    placeholder={"Player " + (index + 1)}
                    placeholderTextColor="rgba(255,255,255,0.2)" 
                    onChangeText={(text) => setName(text, index)} />
                    
                    <Text style={styles.score}>{player.score}</Text>
                </View>
    }

    // Gets the score part / bottom of the player component
    const renderScoreBox = () => {
        return <View style={styles.box}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.btn}>
                            <TouchableOpacity onPress={() => scoreChange(index, 1)}>
                                <Text style={[styles.plus1, styles.math]}>+1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => scoreChange(index, 10)}>
                                <Text style={[styles.plus10, styles.math]}>+10</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity onPress={() => scoreChange(index, -1)}>
                                <Text style={[styles.minus1, styles.math]}>-1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => scoreChange(index, -10)}>
                                <Text style={[styles.minus10, styles.math]}>-10</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.btn}>
                            <TouchableOpacity onPress={() => scoreChange(index, 0)}>
                                <Text style={styles.zero}>Screwed</Text>
                            </TouchableOpacity>
                    </View>
                </View>
    }

    // Renders both the text input part and score part together and adds add new player to last one
    const renderComponent = () => {
        if (index !== lastIndex) {
            return <View style={[styles.container, containerStyle(index)]}>
                        {renderTextInput()}
                        {renderScoreBox()}
                    </View>
        }
        else {
            return <>
                    <View style={[styles.container, containerStyle(index)]}>
                        {renderTextInput()}
                        {renderScoreBox()}
                    </View>
                    {
                        round === 1
                        ? <AddPlayerComponent addNewPlayer={addNewPlayer} />
                        : null
                    }
            </>
        }
    }

    return (
        <View>
            <TouchableOpacity style={styles.iconContainer} onPress={() => { setModalVisible(true) }}>
                <Feather name="x" style={styles.icon} />
            </TouchableOpacity>
            {renderComponent()}
            <DeleteUserModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} name={player.name} deletePlayer={deletePlayerTemp} />
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 100
    },
    icon: {
        fontSize: Dimensions.get('window').height * .02,
        color: Color.plus1,
    },
    nameContainer: {
        flexDirection: 'row',
        paddingVertical: Dimensions.get('window').height * .04,
        paddingHorizontal: Dimensions.get('window').width * .02,
    },
    textInput: {
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: Dimensions.get('window').height * .03,
        flex: 1,
        marginLeft: Dimensions.get('window').width * .02,
        fontSize: Dimensions.get('window').height * .03,
        fontFamily: 'BalsamiqSans'
    },
    box: {
        flex: 1,
        flexDirection: 'column',
    },
    score: {
        fontSize: Dimensions.get('window').height * .06,
        flex: 1,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'BalsamiqSans'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    math: {
        padding: Dimensions.get('window').height * .003,
        fontSize: Dimensions.get('window').height * .02,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'BalsamiqSans'
    },
    zero: {
        padding: Dimensions.get('window').height * .01,
        fontSize: Dimensions.get('window').height * .015,
        textAlign: 'center',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: Color.zero,
        fontFamily: 'BalsamiqSans'
    },
    plus1: {
        backgroundColor: Color.plus1,
    },
    plus10: {
        backgroundColor: Color.plus10,
    },
    minus1: {
        backgroundColor: Color.minus1,
    },
    minus10: {
        backgroundColor: Color.minus10,
    },
    btn: {
        flex: 1
    },

})

export default PlayerItemComponent;