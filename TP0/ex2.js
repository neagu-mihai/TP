"use strict";
exports.__esModule = true;
var http = require("http");
http.get('http://cat-fact.herokuapp.com/facts', function (res) {
    res.on('data', function (chunk) {
        var catFacts = JSON.parse(chunk.toString());
        console.log(catFacts);
        var fact = catFacts.find(function (elem) { return elem._id === '58e008780aac31001185ed05'; });
        if (!fact)
            throw Error('Fact not found for this id');
        console.log(fact.text);
    });
});
