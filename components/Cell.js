/**
 * Created by younger on 2016/7/17.
 */
import React,{ Component } from 'react';
import ReactNative from 'react-native';
var {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    } = ReactNative;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/cell';

class Cell extends Component{
    cellStyle() {
        switch (1) {
            case 1:
                return styles.cellX;
            case 2:
                return styles.cellO;
            default:
                return null;
        }
    }

    textStyle() {
        switch (1) {
            case 1:
                return styles.cellTextX;
            case 2:
                return styles.cellTextO;
            default:
                return {};
        }
    }

    textContents() {
        /*    switch (this.props.num) {
         case 1:
         return 'X';
         case 2:
         return 'O';
         default:
         return '';
         }*/
        let { cell } = this.props;
        return cell.value;
    }
    onPress = ()=>{
        let { actions } = this.props;
        actions.test(this.props.num);
    }


    /*  position(top,left){
     return({position: 'absolute', top: {top}, left: {left}})
     }
     ,this.position(this.props.ptop,this.props.pleft)
     */
    render() {
        //{{top: 200, left: 300,}}
        if(this.props.Point){

        }
        let top = this.props.Point.top,
            left = this.props.Point.left;
        return (
            <View style={{position: 'absolute',top: top, left: left}}>
                <TouchableHighlight
                    onPress={this.onPress}
                    underlayColor="transparent"
                    activeOpacity={0.5}>
                    <View style={[styles.cell, this.cellStyle()]}>
                        <Text style={[styles.cellText, this.textStyle()]}>
                            {this.textContents()}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width:500,
        height:100,
    },
    title: {
        fontFamily: 'Chalkduster',
        fontSize: 39,
        marginBottom: 20,
    },
    board: {
        padding: 15,
        backgroundColor: '#47525d',
        borderRadius: 10,
        position: 'absolute',
        top: 200,
        left: 300,
    },
    row: {
        flexDirection: 'row',
    },

    // CELL

    cell: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#7b8994',
        margin: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        /*position: 'absolute',
         top: 250,
         left: 300,*/
    },
    cellX: {
        backgroundColor: '#72d0eb',
    },
    cellO: {
        backgroundColor: '#7ebd26',
    },

    // CELL TEXT

    cellText: {
        //fontSize: 50,
        fontFamily: 'AvenirNext-Bold',
    },
    cellTextX: {
        color: '#19a9e5',
    },
    cellTextO: {
        color: '#b9dc2f',
    },

    // GAME OVER

    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(221, 221, 221, 0.5)',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayMessage: {
        fontSize: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'AvenirNext-DemiBold',
        textAlign: 'center',
    },
    newGame: {
        backgroundColor: '#887765',
        padding: 20,
        borderRadius: 5,
    },
    newGameText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'AvenirNext-DemiBold',
    },
});

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
)(Cell);

