// include the wrapper library for nodejs
var github = require('octonode');

// perform asynchronous file read with callback
//prevents blocking of code
// best suited for large number of IO requests happening simultaneously
fs = require('fs')
// insert access token in the githubAccessToken file
fs.readFile('./githubAccessToken', 'utf8', function (err,data) {
  if (err) {
    console.log(err);
  }
  var client = github.client(data);
  var username = 'LoyolaChicagoCS';
  var reponame = 'coursedescriptions';
  client.get('/repos/'+username+'/'+reponame, {}, function (err, status, body, headers) {
  console.log(body); //json object
});
});
