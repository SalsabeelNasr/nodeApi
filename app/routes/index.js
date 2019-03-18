const appRoutes = require('./app-routes');
module.exports = function (app, db) {
    appRoutes(app, db);
}
