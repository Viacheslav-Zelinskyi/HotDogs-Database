const express = require('express');
const cors = require('cors');
const client = require('./db')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();
require('dotenv').config()

const port = process.env.PORT;

app.use(cors());

client.connect();

app.get('/get_hotdog', function (req, res) {
	client.query('SELECT * FROM hotdogs', (err, resp) => {
		res.send(resp?.rows);
	});
});

app.post('/add_hotdog', jsonParser, function (req, res) {
	client.query(
		'INSERT INTO Hotdogs(name, price, description, imageURL) VALUES($1, $2, $3, $4)',
		[req.body.name, req.body.price, req.body.description, req.body.imageurl],
		(err, resp) => {
			res.send(err ? err.stack : 'Succes');
		}
	);
});

app.post('/del_hotdog', jsonParser, function (req, res) {
	client.query('DELETE fROM Hotdogs WHERE id=$1', [req.body.id], (err, resp) => {
		res.send(err ? err.stack : 'Succes');
	});
});

app.post('/edit_hotdog', jsonParser, function (req, res) {
	client.query(
		'UPDATE Hotdogs SET name=$1, price=$2, description=$3, imageURL=$4 WHERE id=$5',
		[req.body.name, req.body.price, req.body.description, req.body.imageurl, req.body.id],
		(err, resp) => {
			res.send(err ? err.stack : 'Succes');
		}
	);
});

app.listen(port, () => {
	console.log('Started');
});
