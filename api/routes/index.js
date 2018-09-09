/*
* @Author: alexandru pop
* @Date:   2018-09-07 19:45:49
* @Last Modified by:   alexandru pop
* @Last Modified time: 2018-09-07 20:27:26
*/

const noteRoutes = require('./note_routes')

module.exports = function(app, db) {
	noteRoutes(app, db)
}