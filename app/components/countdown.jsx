var React = require('react');
var Clock = require('clock');
var CountdownForm = require('countdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {count: 0};
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function () {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});


module.exports = Countdown;