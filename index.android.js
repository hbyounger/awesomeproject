/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    TouchableHighlight,
    View,
    ScrollView
} from 'react-native';

import {
    icon,
    samples} from './Circle'
//import {SampleApp} from './animatedPath'
let {       CircleExample,
    StrokeCircle,
    StrokeOpacityCircle
    } = samples
//import VectorWidget from './components/VectorWidget'
//import {VectorWidget} from './VectorWidget'
import Game2048 from './2048/Game2048'
//var Game2048 = require('./2048/Game2048');
//var MoviesApp = require('./Movies/MoviesApp.android')
import MoviesApp from './Movies/MoviesApp.android'
//var TicTacToeApp = require('./TicTacToe/TicTacToeApp')
import TicTacToeApp from './TicTacToe/TicTacToeApp'

//import {} from './Movies/MoviesApp.android'
/////////////////////////////////////////////////
import ReactART from 'ReactNativeART'//art
const {
    Path,
    Group,
    Shape,
    Surface,
    Transform
    } = ReactART

const MOUSE_UP_DRAG = 0.978
const MOUSE_DOWN_DRAG = 0.9
const MAX_VEL = 11
const CLICK_ACCEL = 3
const BASE_VEL = 0.15
///////////////////////////////////////////
import MetricsPath from 'art/metrics/path'

var SVG_PATH = 'M30,30L200,200L202,200L150,200L300,500L305,550';

var pathMetrics = new MetricsPath(SVG_PATH);

var boxPath = new Path()
    .moveTo(-10, -10)
    .line(20, 0)
    .line(0, 20)
    .line(-20, 0)
    .close();

class SampleApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    componentDidMount() {

    }

    _animateEntrance() {
        requestAnimationFrame(() => {
            this.setState({value: this.state.value + 3});
            // This is some random number that I guessed to be the length of the Shape
            if (this.state.value <= pathMetrics.length) {
                requestAnimationFrame(this._animateEntrance.bind(this));
            }
        });
    }
    handleCellPress = ()=>{
        this.state = {
            value: 0,
        }
        this._animateEntrance();
    }
    /*
     <TouchableHighlight
     onPress={this.handleCellPress}
     underlayColor="transparent"
     activeOpacity={0.5}>
     </TouchableHighlight>
    <Cell
     key={'cell' + 1}
     player={1}
     onPress={this.handleCellPress}
     />*/
    render() {
        var point = pathMetrics.point(this.state.value);
        return (
            <Surface width={320} height={600}>
                <Shape d={SVG_PATH}
                       stroke="black" strokeDash={[this.state.value,700]}
                       strokeWidth={2} />

                <Shape d={boxPath}
                       x={point.x}
                       y={point.y}
                       stroke="blue" />
            </Surface>
        );
    }
}
///////////////////////////////////////////
class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }
    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Tap me to go back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
////////////////////////////////////////////
class AwesomeProject extends Component {
    /*<Text style={styles.welcome}>
     Welcome to React Native!
     </Text>
     <Text style={styles.instructions}>
     To get started, edit index.android.js
     </Text>
     <Text style={styles.instructions}>
     Shake or press menu button for dev menu
     </Text>
     cd android && ./gradlew assembleRelease
     <SampleApp style={styles.instructions}>
     </SampleApp>
     <Game2048>
     </Game2048>
     */
    startX: number;
    startY: number;
    state: any;

    constructor(props: {}) {
        super(props);
        this.state = {
            //board: new GameBoard(),
        };
        this.startX = 0;
        this.startY = 0;
    }

    handleTouchStart(event: Object) {
        this.startX = event.nativeEvent.pageX;
        this.startY = event.nativeEvent.pageY;
    }

    handleTouchEnd(event: Object) {
        var deltaX = event.nativeEvent.pageX - this.startX;
        var deltaY = event.nativeEvent.pageY - this.startY;

        var direction = -1;
        if (Math.abs(deltaX) > 3 * Math.abs(deltaY) && Math.abs(deltaX) > 30) {
            direction = deltaX > 0 ? 2 : 0;
        } else if (Math.abs(deltaY) > 3 * Math.abs(deltaX) && Math.abs(deltaY) > 30) {
            direction = deltaY > 0 ? 3 : 1;
        }

        if (direction !== -1) {
            //this.setState({board: this.state.board.move(direction)});
        }
    }
    /*<MoviesApp>123</MoviesApp>
    * <SampleApp style={styles.instructions}/>
    * <View style={styles.container}
     onTouchStart={(event) => this.handleTouchStart(event)}
     onTouchEnd={(event) => this.handleTouchEnd(event)}>
     <Text style={styles.welcome}>
     杨珂的游戏
     </Text>
     <TicTacToeApp/>
     </View>
     initialRoute={{ title: 'My Initial Scene', index: 0 }}
     renderScene={}
     (route, navigator) =><MyScene
     title={route.title}

     // Function to call when a new scene should be displayed
     onForward={ () => {
     const nextIndex = route.index + 1;
     navigator.push({
     title: 'Scene ' + nextIndex,
     index: nextIndex,
     });
     }}

     // Function to call to go back to the previous scene
     onBack={() => {
     if (route.index > 0) {
     navigator.pop();
     }
     }}
     />*/
    /*
     *  - Navigator.SceneConfigs.PushFromRight (default)
     *  - Navigator.SceneConfigs.FloatFromRight
     *  - Navigator.SceneConfigs.FloatFromLeft
     *  - Navigator.SceneConfigs.FloatFromBottom
     *  - Navigator.SceneConfigs.FloatFromBottomAndroid
     *  - Navigator.SceneConfigs.FadeAndroid
     *  - Navigator.SceneConfigs.HorizontalSwipeJump
     *  - Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
     *  - Navigator.SceneConfigs.VerticalUpSwipeJump
     *  - Navigator.SceneConfigs.VerticalDownSwipeJump*/
    configureScene = (route)=>{
        return Navigator.SceneConfigs.FadeAndroid;
    }
    renderScene(router, navigator){
        var Component = null;
        this._navigator = navigator;
        switch(router.name){
            case "welcome":
                Component = WelcomeView;
                break;
            case "feed":
                Component = FeedView;
                break;
            default: //default view
                Component = DefaultView;
        }
        return <Component navigator={navigator} />
    }
    componentDidMount() {
        var navigator = this._navigator;
        /*BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });*/
    }
    componentWillUnmount() {
        //BackAndroid.removeEventListener('hardwareBackPress');
    }
    render() {
        return (
            <Navigator
                initialRoute={ {name: 'welcome'} }
                configureScene={ this.configureScene }
                renderScene={ this.renderScene }
            />
        );
    }
}

var FeedView = React.createClass({
    goBack(){
        this.props.navigator.push({name:"default"});
    },

    render() {
        return (
            <ScrollView>
                <Text style={styles.instructions} onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
                <SampleApp style={styles.instructions}/>
            </ScrollView>
        )
    }
});

var Cell = React.createClass({
    cellStyle() {
        switch (this.props.player) {
            case 1:
                return styles.cellX;
            case 2:
                return styles.cellO;
            default:
                return null;
        }
    },

    textContents() {
        switch (this.props.player) {
            case 1:
                return 'X';
            case 2:
                return 'O';
            default:
                return '';
        }
    },
    textStyle() {
        switch (this.props.player) {
            case 1:
                return styles.cellTextX;
            case 2:
                return styles.cellTextO;
            default:
                return {};
        }
    },
    render() {
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
                underlayColor="transparent"
                activeOpacity={0.5}>
                <View style={[styles.cell, this.cellStyle()]}>
                    <Text style={[styles.cellText, this.textStyle()]}>
                        {this.textContents()}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
});
class WelcomeView extends Component {
    /*constructor(props){
        super(props);
        this.State = { board: new Board(), player: 1 };
    }


    handleCellPress = (row: number, col: number)=> {
        if (this.state.board.hasMark(row, col)) {
            return;
        }

        this.setState({
            board: this.state.board.mark(row, col, this.state.player),
        });
    }*/

    onPressFeed = ()=> {
        this.props.navigator.push({name: 'feed'});
    }
    render() {
        /*var rows = this.state.board.grid.map((cells, row) =>
            <View key={'row' + row} style={styles.row}>
                {cells.map((player, col) =>
                    <Cell
                        key={'cell' + col}
                        player={player}
                        onPress={this.handleCellPress.bind(this, row, col)}
                    />
                )}
            </View>
        );*/
        return (
            <View style={styles.container}>
                <Text style={styles.instructions} onPress={this.onPressFeed} >
                    This is welcome view.Tap to go to feed view.
                </Text>
                <TicTacToeApp/>
            </View>
        );
    }
}

var DefaultView = React.createClass({
    onPressWelcome() {
        this.props.navigator.push({name: 'welcome'});
    },

    render(){
        return (
            <ScrollView>
                <Text style={styles.instructions} onPress={this.onPressWelcome}>Default view</Text>
                <Game2048/>
            </ScrollView>
        )
    }
});

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
    cell: {
        width: 16,
        height: 16,
        borderRadius: 3,
        backgroundColor: '#7b8994',
        margin: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellX: {
        backgroundColor: '#72d0eb',
    },
    cellO: {
        backgroundColor: '#7ebd26',
    },
    cellText: {
        fontSize: 50,
        fontFamily: 'AvenirNext-Bold',
    },
    cellTextX: {
        color: '#19a9e5',
    },
    cellTextO: {
        color: '#b9dc2f',
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
//import './main';
