const app = require('./server/server');
const PORT = process.env.NODE_ENV || 3000;

app.listen(PORT, (err) => {
    if (err) return console.log('ERROR: ', err);
    console.log(`App listening on port ${PORT}`);
});