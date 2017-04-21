import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';

export default class Navigation extends Component {
    render() {
        const routes = [
            {
                title: 'First Scene',
                index: 0
            },
            {
                title: 'Second Scene',
                index: 1
            }
        ];

        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={
                    (route, navigator) =>
                        <TouchableHighlight
                            onPress={() => { if (route.index === 0) { navigator.push(routes[1]); } else { navigator.pop(); } } }>
                            <Text>Hello {route.title}!</Text>
                        </TouchableHighlight>}
                style={{ padding: 200 }} />
        );
    }
}
