const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/idc-front-end'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/idc-front-end/index.html'));
});

ngApp.listen(process.env.PORT || 8080);