import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions, SafeAreaView, FlatList} from 'react-native'
import * as Color from '../../global/Color'
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
        this.setState({players: tempPlayers}, () => console.log(this.state.players))
    }


    render() {
        return (
            <View style={styles.background}>
                <SafeAreaView>
                    <FlatList
                    data={this.state.players}
                    renderItem={({item, index}) => (
                        <PlayerItemComponent player={item} index={index} lastIndex={this.state.players.length - 1} addNewPlayer={this.addNewPlayer}/>
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
        backgroundColor: Color.MAIN_GREEN,
        height: Dimensions.get('window').height
    },
    list: {
        height: Dimensions.get('window').height * .6,
        borderBottomWidth: 3,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
})

export default GameScreen