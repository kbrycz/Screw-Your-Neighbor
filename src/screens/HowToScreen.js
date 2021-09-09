import React from 'react'
import {View, StyleSheet, ScrollView, Dimensions, Image, Text} from 'react-native'

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
            <View style={styles.container}>
                <ScrollView bounces={false} style={styles.background} horizontal pagingEnabled>
                    <Text>Hi</Text>
                </ScrollView>
            </View>
            
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default HowToScreen