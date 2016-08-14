/**
 * Created by wxk on 2016/7/18.
 */
import React,{ Component } from 'react';
import {
    Navigator,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as actions from '../actions/cell';
import * as projectActions from '../redux/project';
import Cell from './Cell'
var projectList = ['项目1','项目2','项目3','项目4','项目5'];
class WelcomeView extends Component {
    onPressMap = (value)=> {
        let {projectActions} = this.props;
        this.props.navigator.push({name: 'map'});
        projectActions.SetProject(value);
    }
    onSubmit = ()=>{
        this.props.navigator.push({name: 'login'});
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
        let ProjectArray = []
        if(projectList){
            projectList.forEach((ele)=>{
                ProjectArray.push(
                    <TouchableHighlight
                        onPress={this.onPressMap.bind(this,ele)}
                        underlayColor="transparent"
                        activeOpacity={0.5}>
                        <View style={styles.style_view_commit}>
                            <Text style={{color:'#fff'}} >
                                {ele}
                            </Text>
                        </View>
                    </TouchableHighlight>
                )
            })
        }

        return (

            <View >
                <Text style={styles.welcome} >
                    选择项目
                </Text>
                {ProjectArray}
                <TouchableHighlight
                    style={[styles.style_view_exit,{top : 0 ,left : 0}]}
                    onPress={this.onSubmit}
                    underlayColor="transparent"
                    activeOpacity={0.5}>
                    <View >
                        <Text style={{color:'#fff'}} >
                            {'退出'}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    style_view_exit:{
        marginTop:25,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        //width:60,
        //borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        color:'#63B8FF',
        fontSize: 16,
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
    style_view_commit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function mapStateToProps(state){
    return {
        cell : state.cell.toJS()
    }
}

function mapDispatchToProps(dispatch){
    return {
        projectActions : bindActionCreators( projectActions , dispatch )
    }
}
//export default
export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(WelcomeView);

