

const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db          = require('./api/config/db')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


MongoClient.connect(db.url,  (err, database) => {
	
	if(err)
		return console.log(err);

	require('./api/routes')(app, database)
	app.listen(port, () =>{
		console.log('Api server is running on port :' + port);
	})
})