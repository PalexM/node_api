/*
* @Author: alexandru pop
* @Date:   2018-09-07 20:06:32
* @Last Modified by:   alexandru pop
* @Last Modified time: 2018-09-07 21:40:59
*/
var ObjectId = require('mongodb').ObjectId

module.exports = function(app, db) {
	app.get('/notes/:id', (req, res) =>{
		const id = req.params.id
		const details = {'_id': new ObjectId(id)};
		db.collection('notes').findOne(details, (err, item) => {
			if(err)
				res.send({'error': 'We have an error here buddy !'})
			else
				res.send(item)
		})
	})
	app.post('/notes', (req, res) => {

		const note = {text: req.body.body, title: req.body.title};

		db.collection('notes').insert(note,(err, result) => {
			if(err)
				res.send({'error': 'We have a error here => '+ err})
			else
				res.send(result.ops[0])

			client.close();
		})
	})
}