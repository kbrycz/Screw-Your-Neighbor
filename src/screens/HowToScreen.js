import React from 'react'
import {View, StyleSheet, ScrollView, Dimensions, Image, Text} from 'react-native'
import CircleComponent from '../components/CircleComponent'
import * as Color from '../../global/Color'

class HowToScreen extends React.Component {

    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <View>
                <CircleComponent isWhite={true}/>
                <ScrollView style={{marginBottom: Dimensions.get('window').height * .05, marginTop: Dimensions.get('window').height * .05}}>
                <Text style={styles.headerText}>How to Play</Text>
                <Text style={styles.sub}>Screw Your Neighbor</Text>
                <Text style={styles.p}>This game is played with one standard deck of cards. For the first round, deal out as many cards as possible while also having at least one card left over!
                                       Flip over a card from the remaining pile. This card will be the trump card!</Text>
                <Text style={styles.p}>Much like Euchre, the trump suit will be the most powerful suit throughout the round. 
                                       For example, if the trump card is the "8 of Diamonds", Diamonds is the trump suit! The 8 is not important to you!</Text>
                <Text style={styles.p}>The object of the game is to predict how many "tricks" you will win with your given hand. You win a trick by 
                                       1. Having the highest trump suited card or 2. If there are no trump cards on the table, having the highest card that matches the lead suit.</Text>
                <Text style={styles.p}>The player to the left of the dealer plays the first card. This is the lead card as mentioned above. 
                                       Every other player MUST match the suit of the lead card if they have it. 
                                       If they don't, they may play any random card.</Text>
                <Text style={styles.p}>If you want to win the trick, you want to play the trump suit in this situation as long as there aren't any higher trump cards on the table. 
                                       If you don't have the trump suit, or another card is higher, play one of the other two suits. That card will be useless and you will lose the trick </Text>
                <Text style={styles.p}>Remember, you want to win as many tricks as you had called at the beginning of the round. If you said you'd win 2 tricks, 
                                       you have to be strategic in which ones you choose to win!</Text>
                <Text style={styles.p}>If you guess all your tricks right, you get as many points as tricks you got right, plus 10 extra for being right! 
                                       If you fail to get your tricks prediction right, you only get to add the points for how many tricks you won!</Text>
                <Text style={styles.p}>After each round, give one less card to each player. For example, you should hand out 7 cards to every player if you gave 8 in round 1!
                                       Play all the way to 1 card left. Some players also like to go back to where they started for a longer game! Your choice! Have fun!</Text>
                </ScrollView>
                
            </View>
            
        )
    }
    
}

const styles = StyleSheet.create({
    headerText: {
        marginTop: Dimensions.get('window').height * .05,
        marginLeft: Dimensions.get('window').width * .12,
        marginRight: Dimensions.get('window').width * .12,
        lineHeight: Dimensions.get('window').height * .08,
        textAlign: 'center',
        fontSize: Dimensions.get('window').height * .05,
        color: Color.MAIN,
        fontFamily: 'BalsamiqSans'
    },
    sub: {
        marginTop: Dimensions.get('window').height * .005,
        textAlign: 'center',
        fontSize: Dimensions.get('window').height * .02,
        color: Color.MAIN,
        marginBottom: Dimensions.get('window').height * .05,
        fontFamily: 'BalsamiqSans'
    },
    p: {
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        marginBottom: Dimensions.get('window').height * .04,
        textAlign: 'justify',
        fontSize: Dimensions.get('window').height * .02,
        lineHeight: Dimensions.get('window').height * .03,
        color: Color.MAIN,
        fontFamily: 'BalsamiqSans'
    },
})

export default HowToScreen