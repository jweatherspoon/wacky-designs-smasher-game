/**
 * @file Component for the main game screen
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import Sprite from '../../assets/images/Sprite.png';

class GameScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: 0,
            moveAnimation: null,
            width: 0, 
            ticks: 0,
            gameInterval: null,
            lost: false,
        }
    }

    componentDidMount() {
        this.setState({
            width: Dimensions.get('window').width
        })
    }

    activatePillars = pillars => {

    }

    dropReadyPillars = () => {

    }

    pillarSelection = () => {

    }

    lose = () => {

    }

    update = () => {
        if(this.state.ticks % this.state.pillarDelay === 0) {
            // Select some new pillars
            let pillars = this.pillarSelection();
            this.activatePillars(pillars);
        }

        this.dropReadyPillars();

        if(this.state.lost) {
            this.lose();
        }
    }

    movePlayer = (delta) => {
        if(!this.state.moveAnimation) {
            let i = 0, step = delta / 10;
            let interval = setInterval(() => {
                if(i >= 10) {
                    clearInterval(this.state.moveAnimation);
                    this.setState({
                        moveAnimation: null
                    })
                } else {
                    i++;
                    let newPos = Math.min(this.state.width,
                         Math.max(this.state.position + step, 0));
                    this.setState({
                        position: newPos
                    })
                }
            }, 1)
            this.setState({
                moveAnimation: interval
            })
        }
    }

    onSwipe = (gestureName, gestureState) => {
        const {
            SWIPE_LEFT,
            SWIPE_RIGHT
        } = swipeDirections;

        switch(gestureName) {
            case SWIPE_LEFT:
                this.movePlayer(-1 * this.state.width / 5);
                break;
            case SWIPE_RIGHT:
                this.movePlayer(this.state.width / 5);
                break;
        }
    }

    render() {

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        }

        return (
            <GestureRecognizer
                onSwipe={(dir, state) => this.onSwipe(dir, state)}
                config={config}
                style={{
                    height: '100%'
                }} >
                <Image style={{
                    height: 75,
                    width: 75,
                    bottom: 0,
                    position: 'absolute',
                    left: this.state.position
                }} 
                source={Sprite}/>
            </GestureRecognizer>
        )
    }
}

export default GameScreen;