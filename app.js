var express = require('express');
var Youtube = require("youtube-api");

var app = express();

app.get('/', function(req, res) {
    var _res = res;

    Youtube.authenticate({
        type: "key"
      , key: "YOUTUBE_KEY"
    });

    Youtube.search.list({
      "part": "snippet",
      "channelId": "CHANNEL_ID",
      "order": "date",
      "maxResults": 20,
      "type": "video"
    }, function(err, data) {
      if (err) {
        res.json(err);
      }
      if (data) {
        res.json(data);
      }
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
