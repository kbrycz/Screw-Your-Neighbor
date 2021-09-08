import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions, SafeAreaView, FlatList} from 'react-native'
import * as Color from '../../global/Color'
import GameHeaderComponent from '../components/GameHeaderComponent'
import PlayerItemComponent from '../components/PlayerItemComponent'

class GameScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            players: [],
            round: 0,
        }
    }


    componentDidMount() {
        this.addNewPlayer()
    }

    addNewPlayer = () => {
        // get player initial data
        let player = {
            id: this.state.players.length,
            name: '',
            score: 0,
            status: false,
            history: [{score: 0, round: 0, prev: 0}]
        }
        
        // Set players array with new player
        let tempPlayers = this.state.players
        tempPlayers.push(player)
        this.setState({players: tempPlayers})
    }

    setName = (text, index) => {
        let tempPlayers = this.state.players
        tempPlayers[index].name = text
        this.setState({players: tempPlayers})
    }


    render() {
        return (
            <View style={styles.background}>
                <SafeAreaView style={styles.sv}>
                    <GameHeaderComponent />
                    <FlatList
                    data={this.state.players}
                    renderItem={({item, index}) => (
                        <PlayerItemComponent player={item} index={index} lastIndex={this.state.players.length - 1} addNewPlayer={this.addNewPlayer} setName={this.setName} />
                    )}
                    keyExtractor={item => item.id.toString()}
                    style={styles.list} />
                </SafeAreaView>
            </View>
            
        )
    }
    
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: Color.MAIN,
        height: '100%',
    },
    list: {
        height: '100%',
    },
    sv: {
        marginBottom: Dimensions.get('window').height * .1,
    }
})

export default GameScreen