const React = require('react');

const styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100
  }
}

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a City and State</h1>
      <div className="text-center">
        <form>
          <div className="form-group">
            <input className="form-control" placeholder="St. George, Utah" type="text"/>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-lg btn-success">
              Get Weather
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

module.exports = Home;
