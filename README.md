
#Installation

#Installation of octonode wrapper library -- octonode-test.js

- apt-get install npm

- npm install octonode

PREREQUISITES

1. Create personal GitHub access token from
   https://github.com/settings/applications
   (select scope: public_repo).

2. For security reasons, store in local file in ./githubAccessToken.



#Installation of github js wrapper library -- test-repo.js

Either grab github.js from this repo or install via NPM:

- npm install github-api
 
- npm install tape

PREREQUISITES

Place the private token in a user.json file as shown:
```json
{
    "USERNAME": "mikedeboertest",
    "PASSWORD": "test1324",
    "REPO": "github",
    "TOKEN": "9090909210920920190909238398"
}
```


