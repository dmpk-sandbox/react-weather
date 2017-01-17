const React = require('react');
const GetCity = require('../components/GetCity');

const GetCityContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  render: function () {
    return <GetCity direction = {this.props.direction}/>
  }
});

module.exports = GetCityContainer;
