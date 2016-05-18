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
  AsyncStorage
} from 'react-native';

class randd extends Component{

    constructor(props) {
      super(props);

      this.state = {};
      this.saveData = this.saveData.bind(this);
    }
 
    componentDidMount() {
        AsyncStorage.getItem("myKey").then((value) => {
            this.setState({"myKey": value});
        }).done();
    }
 
    getInitialState() {
        return { };
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.saved}>
                    {this.state.myKey}
                </Text>
                <View>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={(text) => this.saveData(text)}
                        value=" " />
                </View>
                <Text style={styles.instructions}>
                    Type something into the text box.  It will be saved to
                    device storage.  Next time you open the application, the saved data
                    will still exist.
                </Text>
            </View>
        );
    }
 
    saveData(value) {
        AsyncStorage.setItem("myKey", value);
        this.setState({"myKey": value});
    }
 
}
 
var styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#F5FCFF",
    },
    formInput: {
        flex: 1,
        height: 26,
        fontSize: 13,
        borderWidth: 1,
        borderColor: "#555555",
    },
    saved: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
        marginTop: 5,
    },
});
AppRegistry.registerComponent('randd', () => randd);
