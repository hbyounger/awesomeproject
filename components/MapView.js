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
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/project';
import Cell from './Cell'

class MapView extends Component {
    onPressFeed = ()=> {
        this.props.navigator.push({name: 'feed'});
    };
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
        let PList = [],
            {project} = this.props,
            index = 0 ;
        if(this.props.list) {
            this.props.list.forEach((ele,i)=> {
                PList.push(<Cell
                    Point = {ele}
                    num = {i}
                    navigator = {this.props.navigator}
                />)//<TicTacToeApp/>
            })
        }

        return (
            <ScrollView >
                <Text style = {styles.welcome}>{project.project+'选取钻位'}</Text>
                <ScrollView
                    horizontal = {true}>
                    <View style = {styles.container}>
                        { PList }
                    </View>
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 500,
        height: 900,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    welcome: {
        color: '#19a9e5',
        fontSize: 18,
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

function mapStateToProps(state){
    return {
        cell : state.cell.toJS(),
        project : state.project.toJS(),
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
)(MapView);

