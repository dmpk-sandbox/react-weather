const React = require('react');

const styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5
  }
}

const Main = function (props) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={{margin: 0}}>Main.js Header </h2>
      </div>
      {props.children}
    </div>
  );
};

module.exports = Main;
