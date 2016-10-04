import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', ()=>{

    it('handles RESET', ()=> {
        const initialState = Map();
        const action = {
            type: 'RESET'
        }

        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            counter:{
                value: 0
            }
        }))
    })
})