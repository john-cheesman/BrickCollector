/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Navigator
} from 'react-native';
import MainPage from './main-page';
import LoginPage from './login-page';

export default class BrickCollector extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'LoginPage', name: 'Login' }}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                } } />
        );
    }
    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === 'MainPage') {
            return (
                <MainPage
                    navigator={navigator} />
            );
        }
        if (routeId === 'LoginPage') {
            return (
                <LoginPage
                    navigator={navigator} />
            );
        }
        return this.noRoute(navigator);

    }
    noRoute(navigator) {
        return (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => navigator.pop()}>
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>No route available</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('BrickCollector', () => BrickCollector);
