//repo test using GitHub.js wrapper around the GitHub API
var test = require('tape');
var Github = require("../");
// set the private token in user.json
var test_user = require('./user.json');

test("Repo API", function(t) {
    var timeout = setTimeout(function () { t.fail(); }, 100000);
    var github = new Github({
      token: test_user.TOKEN,
      auth: "token"
    });
    var repo = github.getRepo('michael', 'github');

    t.test('repo.show', function(q) {
        repo.show(function(err, res) {
            q.error(err, 'show repo');
            q.equals(res.full_name, 'michael/github', 'repo name');
            q.end();
        });
    });

    t.test('repo.contents', function(q) {
        repo.contents('master', './', function(err, res) {
            q.error(err, 'get repo contents');
            q.end();
        });
    });

    t.test('repo.fork', function(q) {
        repo.fork(function(err, res) {
            q.error(err, 'test fork repo');
            q.end();
        });
    });

    //@TODO repo.branch, repo.pull

    t.test('repo.listBranches', function(q) {
        repo.listBranches(function(err, res) {
            q.error(err, 'list branches');
            q.end();
        });
    });

    t.test('repo.read', function(q) {
        repo.read('master', 'README.md', function(err, res) {
            q.ok(res.indexOf('##Setup') !== -1, true, 'Returned REAMDE');
            q.end();
        });
    });

    clearTimeout(timeout);
    t.end();

});

var repoTest = Date.now();



