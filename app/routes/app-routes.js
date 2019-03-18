module.exports = function (app, db) {
    app.post('/create', (req, res) => {
        res.send('created');
    });
}