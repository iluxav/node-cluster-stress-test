var request = require('request');
var options = {
    url: 'http://localhost:3000'
};
var map = {};
for (var i = 100 - 1; i > 0; i--) {

    (function(t) {
        request.get(options, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(t, body); // Show the HTML for the Google homepage. 
            } else {
                console.log(t, error);
            }
            if (!map[body]) {
                map[body] = 0;
            }
            map[body] ++;
            console.log(map);
        });
    })(i)

};

