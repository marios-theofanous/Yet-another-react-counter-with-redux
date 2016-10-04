import ChangeButton from '../../src/components/ChangeButton';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    scryRenderedDOMComponentsWithClass,
    Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';

describe('Change Button', ()=> {
    it('Shows name prop', ()=> {
        const component = renderIntoDocument(
            <ChangeButton name="Hello"/>
        )
        const button = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(button.length).to.equal(1);
        expect(button[0].textContent).to.equal("Hello");
    })

    it('Invokes callback when pressed', ()=>{
        let data="";
        const incr = (action) => data=action;
        const component = renderIntoDocument(
            <ChangeButton name="Hello" action="INCREMENT" callback={incr}/>
        )
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);
        expect(data).to.equal('INCREMENT');
    })

})