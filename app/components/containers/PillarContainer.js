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
            <Pillar pillar={pillarObj} style={styles.pillar} 
                key={pillarObj.column} />
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
        flexDirection: 'row'
    },
    pillar: {
        display: 'flex',
        flexGrow: 1,
        width: '100%'
    }
})

const mapStateToProps = state => ({
    pillars: state.pillars
})

export default connect(mapStateToProps)(PillarContainer);
