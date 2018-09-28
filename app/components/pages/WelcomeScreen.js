import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

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
                <Button title={'PLAY'} onPress={this.props.changeUI} />
            </View>
        )
    }

}

export default WelcomeScreen;