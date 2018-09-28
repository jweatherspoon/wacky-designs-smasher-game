import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import PlayButton from '../containers/PlayButton';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}>
                <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>
                    Wacky Designs Smasher Game
                </Text>
                <PlayButton />
            </View>
        )
    }

}

export default WelcomeScreen;