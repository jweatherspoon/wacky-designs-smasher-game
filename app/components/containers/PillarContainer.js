/**
 * @file Contains all the pillars for rendering in game
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Pillar from './Pillar';

class PillarContainer extends Component {
    render() {
        let pillars = this.props.pillars.map(pillarObj => (
            <Pillar pillar={pillarObj} key={pillarObj.column}
                style={{
                    ...styles.pillar,
                    height: pillarObj.position,
                    backgroundColor: pillarObj.color
                }} />
        ))
        return (
            <View style={styles.container}>
                {pillars}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    pillar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = state => ({
    pillars: state.pillars
})

export default connect(mapStateToProps)(PillarContainer);
