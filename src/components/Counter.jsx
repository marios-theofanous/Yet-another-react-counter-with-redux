import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import Score from './Score';
import ChangeButton from './ChangeButton';
import * as actionCreators from '../action_creators'

const Counter = React.createClass({
    mixins: [PureRenderMixin],
    render: function(){
        return <div>
            <Score score={this.props.score} />
            <ChangeButton name="Increase" callback={this.props.increment} />
            <ChangeButton name="Decrease" callback={this.props.decrement} />
            <ChangeButton name="Reset" callback={this.props.reset} />
        </div>
    }
})

function mapStateToProps(state) {
    return{
        score: state.getIn(['counter', 'value'])
    }
}

export const CounterContainer = connect (
    mapStateToProps,
    actionCreators
)(Counter);