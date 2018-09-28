import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import Sprite from '../../assets/images/Sprite.png';

class PlayerSprite extends Component {

    state = {
        dims: Dimensions.get('window').width / 5
    }

    render() {
        return (
            <Image source={Sprite}
                style={{
                    height: this.state.dims,
                    width: this.state.dims,
                    bottom: 0,
                    position: 'absolute',
                    left: this.props.position
                }}
            />
        )
    }
}

const mapStateToProps = state => ({
    position: state.player.position
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSprite);