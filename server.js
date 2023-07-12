const concurrently = require('concurrently');

concurrently([
  { command: 'json-server --watch db.json --port 3001', name: 'json-server' }
]);
