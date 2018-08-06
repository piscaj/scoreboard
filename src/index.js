import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const http = require('http');
const port = process.env.port || 3000;
const server = http.createServer(App);
server.listen(port);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
