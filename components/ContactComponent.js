import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return (
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <ScrollView>
                    <Card title = "Contact Information">
                        <Text style={{margin: 10}, {marginBottom:10}}>
                        1 Nucamp Way {'\n'} Seattle, WA 98001 {'\n'} U.S.A. {'\n'}
                        {'\n'} Phone: 1-206-555-1234 {'\n'} Email: campsites@nucamp.co
                        </Text>
                    </Card>
                </ScrollView>
            </Animatable.View>
        );
    }
}

export default Contact;