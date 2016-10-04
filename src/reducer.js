import {Map} from 'immutable';

function reset(state){
    return state.merge({
        counter:{
            value: 0
        }
    });
}

function increment(state) {
    return state.updateIn(['counter', 'value'], value => value+1);
}

function decrement(state) {
    return state.updateIn(['counter', 'value'], value => value-1);
}

export default function (state=Map({counter:{value:0}}), action) {
    switch (action.type){
        case 'RESET':
            return reset(state);
        case 'INCREMENT':
            return increment(state);
        case 'DECREMENT':
            return decrement(state);
    }
    return state;
}