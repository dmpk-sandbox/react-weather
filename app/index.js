const React = require('react');
const ReactDOM = require('react-dom');

function HelloWorld() {
  return (
    <p>Hello world!</p>
  );
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
