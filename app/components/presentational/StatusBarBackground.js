/**
 * @file Background for the iOS status bar
 * @author Jonathan Weatherspoon
 */

import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

const StatusBarBackground = () => (
    <View style={styles.statusBar}></View>
);

const styles = StyleSheet.create({
    statusBar: {
        height: (Platform.OS === 'ios') ? 18 : 0,
        backgroundColor: 'white',
    }
})

export default StatusBarBackground;