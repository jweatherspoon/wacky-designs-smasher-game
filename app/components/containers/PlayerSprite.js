/**
 * @file Container component for handline player sprite rendering
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Sprite from '../../assets/images/Sprite.png';

/**
 * Renders the player sprite 
 * @class 
 */
class PlayerSprite extends Component {

    state = {
        dims: Dimensions.get('window').width / 5
    }

    render() {
        return (
            <TouchableOpacity onPress={() => alert(this.props.position)}>
                <Image source={Sprite}
                    style={{
                        ...this.props.style,
                        height: this.state.dims,
                        width: this.state.dims,
                        left: this.props.position
                    }}
                />
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => ({
    position: state.player.position
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSprite);