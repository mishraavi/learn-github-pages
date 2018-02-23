const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {

    res.send('Hello Express :) i love you priya i can do anything for you. i can not leave without you. if you will feel any problem and think i will be able to resolve that problem then feelfree to say me. i love you. ')
});

app.listen(process.env.PORT || 3000)
