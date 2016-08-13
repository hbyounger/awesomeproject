/**
 * Created by wxk on 2016/7/19.
 */
'use strict';

import React,{ Component } from 'react';
import {
    Dimensions,
    ListView,
    Navigator,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TextInput,
    ScrollView,
    Alert,
    Picker
} from 'react-native';
const Item = Picker.Item;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/cell';
import Cell from './Cell'//SvgExample
import SvgExample from './main'
import Example from './Map'

const window = Dimensions.get('window');
var RIGHT_LISTVIEW = 'right_listView';
var LEFT_LISTVIEW = 'left_listView';

var array = ['1','2','3','4','5','6','7','8','9','title', 'title','title','title','title','title','title','title','title','title','title'];
var titleArray = ['name', 'sex', 'age' , 'firstName', 'seconName' , 'hehe'];
var rightArray = [
    {name: 'qwe', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'ert', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'rtr', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'ty', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'yu', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'yiu', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'hgj', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'yuty', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'fg', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'kjhk', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'qwe', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'ert', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'rtr', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'ty', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'yu', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'yiu', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'hgj', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'yuty', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'fg', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
    {name: 'kjhk', sex: 'sex', age:'age', firstName: 'firstName', seconName:'seconName', hehe:'hehe'},
];

class GridTest extends Component{
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let offsetval = {x : 0, y: 0};
        this.state ={
            leftDataSource: ds.cloneWithRows(array),
            rightdataSource: ds.cloneWithRows(rightArray),
            leftListOffset: {x : 0, y: 0},
            loaded: false,

            selected1: 'key1',
            selected2: 'key1',
            selected3: 'key1',
            color: 'red',
            mode: Picker.MODE_DIALOG,
        }
    }

    /*getInitialState(){

        return{

        };
    }*/

    componentDidMount(){
        this.setState({
                loaded: true,
            }
        );
    }
    onPressWelcome = ()=>{
        this.props.navigator.push({name: 'welcome'});

    }
    /*let alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
     'catalysts for change. Dynamically revolutionize.';
     Alert.alert('Alert Title',alertMessage,[{text: 'OK', onPress: () => console.log('OK Pressed!')},]);*/
    onPressPicker = ()=>{
        Alert.alert('Alert Title',alertMessage,[{text: 'OK', onPress: () => console.log('OK Pressed!')},]);
        this.props.navigator.push({name: 'picker'});
    }

    onValChange = (key: string, value: string)=>{
        const newState = {};
        newState[key] = value;
        this.setState(newState);
        //Alert.alert('Alert Title',key+','+value,[{text: 'OK', onPress: () => console.log('OK Pressed!')}]);
    }

    onScroll = ()=>{
        if (this.state.loaded) {
            var rightList = this.refs[RIGHT_LISTVIEW];
            var y1 = rightList.scrollProperties.offset;
            this.setState({
                leftListOffset :{x: 0 , y: y1}
            });
        }
    }

    _leftRenderRow = (rowData: string, sectionID: number, rowID: number)=>{
        return (
            <View style={styles.leftListRow}>
                <Text >
                    {rowData}
                </Text>
            </View>
        );
    }
/*selectedValue={this.state.selected1}
 onValueChange={this.onValueChange(this, 'selected1')}*/
    _rightRenderRow = (rowData: object, sectionID: number, rowID: number)=>{
        //() => Alert.alert('Alert Title',alertMessage,[{text: 'OK', onPress: () => console.log('OK Pressed!')},])  <TextInput>{rowData.name}</TextInput>
        return (
            <View style = {styles.rightListRow}>
                <View style = {styles.cellView}>
                    <Text>{rowData.sex}</Text>
                </View>
                <View style = {styles.cellView}>
                    <Picker
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValChange.bind(this,'selected1')}
                        mode="dropdown"
                        style={styles.picker}>
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                </View>
                <View style = {styles.cellView}>
                    <Text>{rowData.name}</Text>
                </View>
                <View style = {styles.cellView}>
                    <Text>{rowData.name}</Text>
                </View>
                <View style = {styles.cellView}>
                    <Text>{rowData.name}</Text>
                </View>
                <View style = {styles.cellView}>
                    <Text>{rowData.name}</Text>
                </View>
                <View style = {styles.cellView}>
                    <Text>{rowData.name}</Text>
                </View>
                <View style = {styles.cellView}>
                    <Text>{rowData.name}</Text>
                </View>
                <View style = {styles.cellView}>
                    <Text>{rowData.name}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.left}>
                    <View style = {styles.mingcheng}>
                        <Text>层序</Text>
                    </View>

                    <ListView
                        ref = {LEFT_LISTVIEW}
                        style = {styles.leftListView}
                        contentOffset = {this.state.leftListOffset}
                        showsHorizontalScrollIndicator = {false}
                        showsVerticalScrollIndicator = {false}
                        scrollEnabled = {false}
                        bounces={false}
                        // scrollEventThrottle={500}
                        dataSource = {this.state.leftDataSource}
                        renderRow = {this._leftRenderRow}
                    />

                </View>
                <View style = {styles.right}>
                    <ScrollView style = {styles.scrollView}
                                showsHorizontalScrollIndicator = {false}
                                showsVerticalScrollIndicator = {false}
                                horizontal = {true}>
                        <View style = {styles.contentView}>
                            <View style = {{width: 1600 , height: 40, flexDirection:'row'}}>
                                <TouchableHighlight
                                    onPress={this.onPressPicker}//onPressPicker
                                    underlayColor="transparent"
                                    activeOpacity={0.5}>
                                    <View style = {styles.cell}>
                                        <Text>描述深度(m)</Text>
                                    </View>
                                </TouchableHighlight>
                                <View style = {styles.titleView}>
                                    <Text>土的名称</Text>
                                </View>
                                <View style = {styles.titleView}>
                                    <Text>颜色</Text>
                                </View>
                                <View style = {styles.titleView}>
                                    <Text>其他性质</Text>
                                </View>
                                <View style = {styles.titleView}>
                                    <Text>光泽反映</Text>
                                </View>
                                <View style = {styles.titleView}>
                                    <Text>摇振反应</Text>
                                </View>
                                <View style = {styles.titleView}>
                                    <Text>干强度</Text>
                                </View>
                                <View style = {styles.titleView}>
                                    <Text>韧性</Text>
                                </View>
                                <View style = {styles.titleView}>
                                    <Text>状态</Text>
                                </View>
                                <View style = {styles.titleView}>
                                    <Text>湿度</Text>
                                </View>
                                <View style = {styles.titleView}>
                                    <Text>取土编号</Text>
                                </View>
                            </View>
                            <ListView
                                ref = {RIGHT_LISTVIEW}
                                // scrollEventThrottle={500}
                                style = {styles.rightListView}
                                dataSource = {this.state.rightdataSource}
                                onScroll={this.onScroll}
                                renderRow = {this._rightRenderRow}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default class DataView extends Component{
    /*onPressWelcome = ()=>{
        this.props.navigator.push({name: 'welcome'});
    }*/
//navigator = {this.props.navigator}
    render(){
        //<SvgExample/><Example/><Game2048/><Text style={styles.instructions} onPress={this.onPressWelcome}>Default view</Text>
        return (
            <ScrollView>
                <GridTest navigator = {this.props.navigator}/>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    picker: {
        width: 100,
    },
    left:{
        flex: 1,
        // backgroundColor:'yellow',
        flexDirection: 'column',
    },
    right:{
        flex: 3,
        backgroundColor:'white',
    },

    mingcheng:{
        height:40,
        marginLeft:0,
        marginRight:0,
        // backgroundColor:'red',
        borderColor: '#DCD7CD',
        borderBottomWidth:1,
        borderRightWidth:1,
        borderTopWidth: 1,
        alignItems: 'center',      // 水平局中
        justifyContent: 'center',  // 垂直居中
    },

    leftListView:{
        flex: 1,
        marginTop: 0,
        marginLeft:0,
        marginRight:0,
        marginBottom:30,
        // backgroundColor:'gray',
    },

    leftListRow:{
        alignItems: 'center',      // 水平局中
        justifyContent: 'center',  // 垂直居中
        height: 40,
        // backgroundColor:'#db384c',
        borderColor: '#DCD7CD',
        borderBottomWidth:1,
        borderRightWidth:1,
    },

    rightListRow:{
        width: 1600 ,
        height: 40,
        flexDirection:'row'
    },

    scrollView:{
        flex: 1,
        marginRight:1,
        marginLeft:1,
        marginTop:0,
        marginBottom:1,
        // backgroundColor: 'red',
        flexDirection:'column'
    },

    contentView:{

        height: window.height -50,
        width: 1600 ,
        // backgroundColor:'yellow',
        flexDirection: 'column',
    },

    rightListView:{
        flex: 1,
        // backgroundColor : 'gray'
    },

    titleView:{
        width:100,
        height:40,
        backgroundColor:'#F5FCFF',
        borderColor: '#DCD7CD',
        borderTopWidth: 1,
        borderRightWidth:1,
        borderBottomWidth:1,
        alignItems: 'center',      // 水平局中
        justifyContent: 'center',  // 垂直居中
    },
    cell: {
        width:100,
        height:40,
        backgroundColor: '#7b8994',
        //margin: 2,
        flex: 1,
        borderRightWidth:1,
        borderBottomWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellView:{
        width:100,
        height:40,
        // backgroundColor:'#db384c',
        borderColor: '#DCD7CD',
        borderRightWidth:1,
        borderBottomWidth:1,
        alignItems: 'center',      // 水平局中
        justifyContent: 'center',  // 垂直居中
    },
});
/*const styles = StyleSheet.create({
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
});*/

/*
function mapStateToProps(state){
    return {
        cell : state.cell.toJS()
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators( actions , dispatch )
    }
}
//export default
export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(DataView);*/
