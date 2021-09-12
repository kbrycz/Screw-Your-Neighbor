import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions, TextInput, Keyboard} from 'react-native'
import * as Color from '../../global/Color'


const PlayerItemComponent = ({player, index, addNewPlayer, lastIndex, setName, scoreChange, round}) => {

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

    const isDone = () => {
        if (player.status) {
            return {
                backgroundColor: Color.DONE,
                opacity: .8
            }
        }
    }

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
                        ? <TouchableOpacity onPress={addNewPlayer}>
                                <View style={styles.addPlayerButtonContainer}>
                                    <Text style={styles.addPlayerButton}>+ Add player</Text>
                                </View>
                          </TouchableOpacity>
                        : null
                    }

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

    nameContainer: {
        flexDirection: 'row',
        paddingVertical: Dimensions.get('window').height * .04,
        paddingHorizontal: Dimensions.get('window').width * .02,
    },

    addPlayerButtonContainer: {
        marginTop: Dimensions.get('window').height * .01,
        padding:  Dimensions.get('window').height * .03,
    },
    addPlayerButton: {
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: Dimensions.get('window').height * .025,
        textAlign: 'center',
        fontFamily: 'BalsamiqSans'
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