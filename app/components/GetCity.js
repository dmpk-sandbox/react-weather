const React = require('react');
const PropTypes = React.PropTypes;

const styles = {

}

function GetCity(props) {
  return (
    <div style = {getStyles(props)}>
          <input className="form-control" placeholder="St. George, Utah" type="text"/>
          <button type="button" className="btn btn-success" style={{margin: 10}}>
            Get Weather
          </button>
    </div>
  );
}

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

GetCity.propTypes = {
  direction: PropTypes.string.isRequired
}

module.exports = GetCity;
