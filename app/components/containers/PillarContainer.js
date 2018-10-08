/**
 * @file Contains all the pillars for rendering in game
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Pillar from './Pillar';

class PillarContainer extends Component {

    state = {
        pillarWidth: 0
    }

    componentDidMount() {
        let numPillars = this.props.pillars.length;
        let pillarWidth = (numPillars) ? Dimensions.get('window').width / numPillars : 0;
        this.setState({
            pillarWidth
        })
    }

    render() {
        let pillars = this.props.pillars.map(pillarObj => (
            <Pillar pillar={pillarObj} id={pillarObj.column} key={pillarObj.column}
                width={this.state.pillarWidth} style={{
                    ...styles.pillar,
                    ...this.props.pillar,
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
