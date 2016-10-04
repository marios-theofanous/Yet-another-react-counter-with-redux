import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    getName: function () {
        return this.props.name || 'ERROR';
    },
    render: function () {
        return(
            <button className="scoreButton" onClick={() => this.props.callback()}>
                {this.getName()}
            </button>
        )
    }
})