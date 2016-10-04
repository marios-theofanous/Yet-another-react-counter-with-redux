import Score from '../../src/components/Score';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import {expect} from 'chai';

describe('Score', () => {
    it('renders the score', () => {
        const component = renderIntoDocument(
            <Score score={0}/>
        )

        const score = scryRenderedDOMComponentsWithClass(component, 'counter');
        expect (score[0].textContent).to.equal('0');
    })
})