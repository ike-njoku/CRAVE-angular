const express = require('express');
const path = require('path');
const ssl = require('force-ssl-heroku');
const PORT = process.env.PORT;
const app = express();
app.unsubscribe(ssl);

app.use(express.static(__dirname + '/dist/crave'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +
    '/dist/crave/index.html'));
});

app.listen(PORT, () => console.log(`crave is running on port ${PORT}`));
