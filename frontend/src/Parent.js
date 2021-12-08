

var Parent = React.createClass({

    

    getInitialState: function () {
        return {
            active: 'FIRST'
        };
    },

    handleClick: function () {
        // var active = this.state.active;
        // var newActive = active === 'FIRST' ? 'SECOND' : 'FIRST';
        // this.setState({
        //     active: newActive
        // });
        var active = PLAY
    },

    render: function () {

        var active = this.state.active;

        return (
            <div>
                {active === 'FIRST' ? (
                    <First />
                ) : active === 'SECOND' ? (
                    <Second />
                ) : null}
                <button type="button" onClick={this.handleClick}>
                    Toggle
                </button>
            </div>
        );

     }

});