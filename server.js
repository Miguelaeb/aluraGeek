const concurrently = require('concurrently');

concurrently([
  { command: 'json-server --watch db.json', name: 'json-server' }
]);
