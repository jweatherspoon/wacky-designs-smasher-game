import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PlaceholderScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: "Hello, world!",
            index: 0,
            intervalID: null,
            text: "",
        }
    }

    componentDidMount() {
        this.state.intervalID = setInterval(() => {
            if(this.state.index <= this.state.content.length) {
                let text = this.state.content.substr(0, this.state.index);
                let index = this.state.index + 1;
                this.setState({
                    text: text,
                    index: index
                });
            } else {
                clearInterval(this.state.intervalID);
                this.setState({
                    intervalID: null
                })
            }
        }, 25)
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
                    fontSize: 50
                }}>
                    {this.state.text}
                </Text>
            </View>
        )
    }
}

export default PlaceholderScreen;