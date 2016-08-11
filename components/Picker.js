/**
 * Created by wxk on 2016/8/11.
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const StyleSheet = require('StyleSheet');
//const UIExplorerBlock = require('UIExplorerBlock');
//const UIExplorerPage = require('UIExplorerPage');

const {
    View,
    Picker,
    Text,
    TouchableWithoutFeedback,
    } = ReactNative;
const Item = Picker.Item;

const PickerExample = React.createClass({

    statics: {
        title: '<Picker>',
        description: 'Provides multiple options to choose from, using either a dropdown menu or a dialog.',
    },

    getInitialState: function() {
        return {
            selected1: 'key1',
            selected2: 'key1',
            selected3: 'key1',
            color: 'red',
            mode: Picker.MODE_DIALOG,
        };
    },

    render: function() {
        return (
            <View title="<Picker>">
                <View title="Basic Picker">
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this, 'selected1')}>
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                </View>
                <View title="Disabled picker">
                    <Picker style={styles.picker} enabled={false} selectedValue={this.state.selected1}>
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                </View>
                <View title="Dropdown Picker">
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange.bind(this, 'selected2')}
                        mode="dropdown">
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                </View>
                <View title="Picker with prompt message">
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected3}
                        onValueChange={this.onValueChange.bind(this, 'selected3')}
                        prompt="Pick one, just one">
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                </View>
                <View title="Picker with no listener">
                    <Picker style={styles.picker}>
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                    <Text>
                        Cannot change the value of this picker because it doesn't update selectedValue.
                    </Text>
                </View>
                <View title="Colorful pickers">
                    <Picker
                        style={[styles.picker, {color: 'white', backgroundColor: '#333'}]}
                        selectedValue={this.state.color}
                        onValueChange={this.onValueChange.bind(this, 'color')}
                        mode="dropdown">
                        <Item label="red" color="red" value="red" />
                        <Item label="green" color="green" value="green" />
                        <Item label="blue" color="blue" value="blue" />
                    </Picker>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.color}
                        onValueChange={this.onValueChange.bind(this, 'color')}
                        mode="dialog">
                        <Item label="red" color="red" value="red" />
                        <Item label="green" color="green" value="green" />
                        <Item label="blue" color="blue" value="blue" />
                    </Picker>
                </View>
            </View>
        );
    },

    changeMode: function() {
        const newMode = this.state.mode === Picker.MODE_DIALOG
            ? Picker.MODE_DROPDOWN
            : Picker.MODE_DIALOG;
        this.setState({mode: newMode});
    },

    onValueChange: function(key: string, value: string) {
        const newState = {};
        newState[key] = value;
        this.setState(newState);
    },
});

var styles = StyleSheet.create({
    picker: {
        width: 100,
    },
});

module.exports = PickerExample;