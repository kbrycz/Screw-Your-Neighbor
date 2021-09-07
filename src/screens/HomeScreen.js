import React from 'react'
import {View, StyleSheet, Text, Dimensions, TouchableOpacity, Share, Linking} from 'react-native'
import * as Color from '../../global/Color'
import { Feather } from '@expo/vector-icons'; 
import SimpleModalComponent from '../components/SimpleModalComponent'

class HomeScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            text: '',
            modalVisible: false
        }
    }

    componentDidMount() {
    }

    // Lets users share the app with other people
    shareButton = async () => {
        try {
            const result = await Share.share({
                url: 'https://celsius.onelink.me/EyfO/ios?pid=website&c=download-app&af_js_web=true',
            });

            } catch (error) {
                this.setState({
                    text: 'Unable to share app. Please try again!',
                    modalVisible: true,
                })
            }
    }

    // Sends the user to the app store to rate the app
    rateApp = () => {
        Linking.openURL('https://apps.apple.com/us/app/celsius-safe-crypto-platform/id1387885523');
    }

    setModalVisible = (isVisible) => {
        this.setState({modalVisible: isVisible})
    }

    render() {
        return (
            <View style={styles.background}>
                <Text style={styles.headerText}>Screw Your Neighbor</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Game')}>
                    <Text style={styles.buttonText}>Play</Text>
                </TouchableOpacity>
                <View style={styles.iconView}>
                    <TouchableOpacity onPress={this.shareButton}>
                        <Feather name="share-2" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.rateApp}>
                        <Feather name="star" style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                        <Feather name="info" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <SimpleModalComponent modalVisible={this.state.modalVisible} 
                                      setModalVisible={this.setModalVisible} 
                                      text={this.state.text} buttonText={'OK'} />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Color.MAIN_GREEN,
        height: Dimensions.get('window').height
    },
    headerText: {
        marginTop: Dimensions.get('window').height * .2,
        marginLeft: Dimensions.get('window').width * .05,
        marginRight: Dimensions.get('window').width * .05,
        lineHeight: Dimensions.get('window').height * .08,
        fontSize: Dimensions.get('window').height * .06,
        textAlign: 'center',
        marginBottom: Dimensions.get('window').height * .04,
        color: '#fff',
        opacity: .8
    },
    buttonText: {
        fontSize: Dimensions.get('window').height * .035,
        textAlign: 'center',
        color: Color.MAIN_GREEN,
    },
    button: {
        width: Dimensions.get('window').width * .7,
        marginLeft: Dimensions.get('window').width * .15,
        marginRight: Dimensions.get('window').width * .15,
        backgroundColor: '#fff',
        marginTop: Dimensions.get('window').height * .3,
        paddingVertical: Dimensions.get('window').width * .03,
        paddingHorizontal: Dimensions.get('window').width * .07,
        borderWidth: 4,
        borderColor: Color.MAIN_GREEN,
        borderRadius: 20,
    },
    iconView: {
        marginTop: Dimensions.get('window').height * .04,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        color: '#fff',
        marginHorizontal: Dimensions.get('window').width * .04,
        fontSize: Dimensions.get('window').width * .08,
    },
})

export default HomeScreen