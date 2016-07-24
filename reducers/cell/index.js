/**
 * Created by younger on 2016/7/17.
 */
import Immutable from 'immutable'
const $$initialState = Immutable.fromJS({});

export default function cell( $$state = $$initialState , action ){
    let status,
        account;
    switch(action.type){
        case 'TEST' :
            return $$state.merge({
                value : action.value+1
            });
            break;
        case 'ALOGIN' :
            //logresult : action.logresult,
            //console.log('alogresult-'+ action.logresult);
            switch (action.logresult){
                case 0:
                case '0':
                    status = 'alogin';
                    break;
                default :
                    status = '';
            }
            return $$state.merge({
                alogresult : action.logresult,
                logstatus : status
            });
            break;
        case 'MODAL_OPEN' :
            return $$state.merge({
                showModal : true
            });
            break;
        case 'MODAL_CLOSE' :
            return $$state.merge({
                showModal : false
            });
            break;
        case 'ONCHANGE' :
            let value = new Object();
            value[action.name] = action.value;
            return $$state.merge(value);
            break;
        case 'SETACCOUNT' :
            return $$state.merge({
                account : action.account
            });
            break;
        case 'SETSTATUS' :
            console.log('SETSTATUS:'+action.logstatus);
            return $$state.merge({
                logstatus : action.logstatus
            });
            break;
        default :
            return $$state;
    }
}