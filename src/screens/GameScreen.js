import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Dimensions, SafeAreaView, FlatList} from 'react-native'
import * as Color from '../../global/Color'
import GameHeaderComponent from '../components/GameHeaderComponent'
import PlayerItemComponent from '../components/PlayerItemComponent'
import SimpleModalComponent from '../components/SimpleModalComponent'

class GameScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            players: [],
            round: 1,
            modalVisible: false
        }
    }


    componentDidMount() {
        this.addNewPlayer()
    }

    setModalVisible = (isVisiible) => {
        this.setState({modalVisible: isVisiible})
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

    scoreChange = (index, num) => {
        let tempPlayers = this.state.players
        if (tempPlayers[index].score + num >= 0) {
            tempPlayers[index].score += num
        }
        else {
            tempPlayers[index].score = 0
        }
        tempPlayers[index].status = true
        this.setState({players: tempPlayers})
    }

    // Return back to main menu
    quit = () => {
        this.props.navigation.navigate('Home')
    }

    // Erase all stats from the players and reset the rounds
    restart = () => {
        let tempPlayers = this.state.players
        for (let i = 0; i < tempPlayers.length; ++i) {
            tempPlayers[i].score = 0
            tempPlayers[i].status = false
            tempPlayers[i].history = [{score: 0, round: 0, prev: 0}]
        }
        this.setState({
            round: 1,
            players: tempPlayers
        })
    }

    // Go to next round if all players have gone, if not, show modal telling them to finish
    next = () => {

        // Make sure every player is ready and store history object
        let tempPlayers = this.state.players
        for (let i = 0; i < tempPlayers.length; ++i) {
            if (!tempPlayers[i].status) {
                this.setState({
                    modalVisible: true
                })
                return
            }
            let historyRound = {
                score: tempPlayers[i].score,
                round: this.state.round,
                prev: tempPlayers[i].history[this.state.round - 1].score,
            }
            tempPlayers[i].history.push(historyRound)
        }

        // Another run through to make sure all of the statuses are updated
        for (let i = 0; i < tempPlayers.length; ++i) {
            tempPlayers[i].status = false
        }


        this.setState({
            round: this.state.round + 1,
            players: tempPlayers
        })
    }

    // Sends user to the history page
    goToHistory = () => {
        this.props.navigation.navigate('History', {params: {players: this.state.players}, screen: 'HistoryScreen'})
    }


    render() {
        return (
            <View style={styles.background}>
                <SafeAreaView style={styles.sv}>
                    <GameHeaderComponent quit={this.quit} restart={this.restart} round={this.state.round} next={this.next} goToHistory={this.goToHistory} />
                    <FlatList
                    data={this.state.players}
                    renderItem={({item, index}) => (
                        <PlayerItemComponent player={item} index={index} lastIndex={this.state.players.length - 1} round={this.state.round}
                                             addNewPlayer={this.addNewPlayer} setName={this.setName} scoreChange={this.scoreChange}/>
                    )}
                    keyExtractor={item => item.id.toString()}
                    style={styles.list} />
                    <SimpleModalComponent modalVisible={this.state.modalVisible} 
                                      setModalVisible={this.setModalVisible} 
                                      text={"Make sure every player has an updated score!"} buttonText={'OK'} />
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