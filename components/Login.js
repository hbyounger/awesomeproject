/**
 * Created by wxk on 2016/8/11.
 */
'use strict';

import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/login';

export class LoginView extends Component {
    /*onPress = ()=>{
        let { actions } = this.props;
        this.props.navigator.push({name: 'data'});
        //actions.test(this.props.num);
    }*/
/**/
    render() {
        return (
            <View>
                <View>
                    <Text>添加账号</Text>
                </View>
                <View>
                    <Image source="{require('./images/ic_sina.png')}" src="" style="display: none;"/>
                        <Image alt="加载中..." title="图片加载中..." src="http://statics.2cto.com/images/s_nopic.gif"/>
                </View>
                <View>
                    <TextInput placeholder="'QQ号/手机号/邮箱'/" underlinecolorandroid="'transparent'">
                        <Text></Text>
                        <TextInput placeholder="'密码'" securetextentry="{true}/" underlinecolorandroid="'transparent'">
                        </TextInput>
                    </TextInput>
                </View>
                <TextInput placeholder="'QQ号/手机号/邮箱'/" underlinecolorandroid="'transparent'">
                    <TextInput placeholder="'密码'" securetextentry="{true}/" underlinecolorandroid="'transparent'">

                    </TextInput>
                </TextInput>
            </View>)
    }
}
/*

 <View>
 <View>
 <Text>登 录</Text>
 </View>
 <View></View>
 <View>
 <View>
 <Text>无法登录？</Text>
 </View>
 <View>
 <Text>新用户</Text>
 </View>
 </View>
 </View>
 */
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        height: 50,
        justifyContent: 'center',
    },
    headtitle: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#000000',
    },
    avatarview: {
        height: 150,
        backgroundColor: '#ECEDF1',
        justifyContent: 'center',
    },
    avatarimage: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    inputview: {
        height: 100,
    },
    textinput: {
        flex: 1,
        fontSize: 16,
    },
    dividerview: {
        flexDirection: 'row',
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ECEDF1'
    },
    bottomview: {
        backgroundColor: '#ECEDF1',
        flex: 1,
    },
    buttonview: {
        backgroundColor: '#1DBAF1',
        margin: 10,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logintext: {
        fontSize: 17,
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10,
    },
    emptyview: {
        flex: 1,
    },
    bottombtnsview: {
        flexDirection: 'row',
    },
    bottomleftbtnview: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bottomrightbtnview: {
        flex: 1,
        height: 50,
        paddingRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    bottombtn: {
        fontSize: 15,
        color: '#1DBAF1',
    }
};

/*
function mapStateToProps(state){
    return {
        login : state.login.toJS()
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators( loginActions , dispatch )
    }
}

export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(LoginView);*/
