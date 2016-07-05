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
    View
} from 'react-native';
import {
    icon,
    samples} from './Circle'
//import {SampleApp} from './animatedPath'
let {       CircleExample,
    StrokeCircle,
    StrokeOpacityCircle
    } = samples
//import {VectorWidget} from './components/VectorWidget'
//import {VectorWidget} from './VectorWidget'
var Game2048 = require('./2048/Game2048');
var MoviesApp = require('./Movies/MoviesApp.android')
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

const BORDER_PATH = "M3.00191459,4 C1.34400294,4 0,5.34785514 0,7.00550479 L0,220.994495 C0,222.65439 1.34239483,224 3.00191459,224 L276.998085,224 C278.655997,224 280,222.652145 280,220.994495 L280,7.00550479 C280,5.34561033 278.657605,4 276.998085,4 L3.00191459,4 Z M3.00191459,4";
const BG_PATH     = "M3.00191459,1 C1.34400294,1 0,2.34785514 0,4.00550479 L0,217.994495 C0,219.65439 1.34239483,221 3.00191459,221 L276.998085,221 C278.655997,221 280,219.652145 280,217.994495 L280,4.00550479 C280,2.34561033 278.657605,1 276.998085,1 L3.00191459,1 Z M3.00191459,1";
const BAR_PATH    = "M3.00191459,0 C1.34400294,0 0,1.34559019 0,3.00878799 L0,21 C0,21 0,21 0,21 L280,21 C280,21 280,21 280,21 L280,3.00878799 C280,1.34708027 278.657605,0 276.998085,0 L3.00191459,0 Z M3.00191459,0";
const RED_DOT_PATH = "M12.5,17 C16.0898511,17 19,14.0898511 19,10.5 C19,6.91014895 16.0898511,4 12.5,4 C8.91014895,4 6,6.91014895 6,10.5 C6,14.0898511 8.91014895,17 12.5,17 Z M12.5,17";
const YELLOW_DOT_PATH = "M31.5,17 C35.0898511,17 38,14.0898511 38,10.5 C38,6.91014895 35.0898511,4 31.5,4 C27.9101489,4 25,6.91014895 25,10.5 C25,14.0898511 27.9101489,17 31.5,17 Z M31.5,17";
const GREEN_DOT_PATH = "M50.5,17 C54.0898511,17 57,14.0898511 57,10.5 C57,6.91014895 54.0898511,4 50.5,4 C46.9101489,4 44,6.91014895 44,10.5 C44,14.0898511 46.9101489,17 50.5,17 Z M50.5,17";
const CENTER_DOT_PATH = "M84,105 C92.8365564,105 100,97.8365564 100,89 C100,80.1634436 92.8365564,73 84,73 C75.1634436,73 68,80.1634436 68,89 C68,97.8365564 75.1634436,105 84,105 Z M84,105";
const RING_ONE_PATH = "M84,121 C130.391921,121 168,106.673113 168,89 C168,71.3268871 130.391921,57 84,57 C37.6080787,57 0,71.3268871 0,89 C0,106.673113 37.6080787,121 84,121 Z M84,121";
const RING_TWO_PATH = "M84,121 C130.391921,121 168,106.673113 168,89 C168,71.3268871 130.391921,57 84,57 C37.6080787,57 0,71.3268871 0,89 C0,106.673113 37.6080787,121 84,121 Z M84,121";
const RING_THREE_PATH = "M84,121 C130.391921,121 168,106.673113 168,89 C168,71.3268871 130.391921,57 84,57 C37.6080787,57 0,71.3268871 0,89 C0,106.673113 37.6080787,121 84,121 Z M84,121";
const RING_TWO_ROTATE = new Transform().translate(84.000000, 89.000000).rotate(-240.000000).translate(-84.000000, -89.000000);
const RING_THREE_ROTATE = new Transform().translate(84.000000, 89.000000).rotate(-300.000000).translate(-84.000000, -89.000000);


class VectorWidget extends Component {

    constructor(props) {
        super(props)
        this.state = {
            degrees: 0,
            velocity: 0,
            drag: MOUSE_UP_DRAG
        }
    }

    componentDidMount() {
        this._interval = window.setInterval(this.onTick.bind(this), 20);
    }

    componentWillUnmount() {
        window.clearInterval(this._interval)
    }

    onTick() {
        const nextDegrees = this.state.degrees + BASE_VEL + this.state.velocity
        const nextVelocity = this.state.velocity * this.state.drag
        this.setState({
            degrees: nextDegrees,
            velocity: nextVelocity
        })
    }

    renderGraphic(rotation) {
        return (
            <Group>
                <Group x={0} y={0}>
                    <Shape fill="rgba(0,0,0,0.1)" d={BORDER_PATH} />
                    <Shape fill="#7BC7BA" d={BG_PATH} />
                    <Shape fill="#DCDCDC" d={BAR_PATH} />
                    <Group>

                    </Group>
                </Group>
            </Group>
        )
    }

    render() {
        //this.renderGraphic(this.state.degrees)
        return (
            <Surface width={300} height={300}>

                {this.renderGraphic(this.state.degrees)}
            </Surface>
        )
    }

}


///////////////////////////////////////////
import MetricsPath from 'art/metrics/path'

var SVG_PATH = 'M30,30L200,200L202,200L150,200L300,500L305,550';

var pathMetrics = new MetricsPath(SVG_PATH);

var boxPath = new Path()
    .moveTo(-5, -5)
    .line(10, 0)
    .line(0, 10)
    .line(-10, 0)
    .close();

export class SampleApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    componentDidMount() {
        this._animateEntrance();
    }

    _animateEntrance() {
        requestAnimationFrame(() => {
            this.setState({value: this.state.value + 15});
            // This is some random number that I guessed to be the length of the Shape
            if (this.state.value <= pathMetrics.length) {
                requestAnimationFrame(this._animateEntrance.bind(this));
            }
        });
    }

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
    /*<MoviesApp>123</MoviesApp>*/
    render() {
        return (
            <View style={styles.container}
                  onTouchStart={(event) => this.handleTouchStart(event)}
                  onTouchEnd={(event) => this.handleTouchEnd(event)}>
                <Text style={styles.welcome}>
                    杨珂的游戏
                </Text>

                <SampleApp style={styles.instructions}/>
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
//import './main';
