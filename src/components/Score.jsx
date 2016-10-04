import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    getScore: function () {
        return this.props.score;
    },
    render: function () {
        return(
            <div className="counter">
                {this.getScore()}
            </div>
        )
    }
})