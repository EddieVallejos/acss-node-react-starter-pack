'use strict';

const db = require(__dirname + '/../lib/mysql');

exports.post_todo = (req, res, next) => {
	const data = {
		name: req.body.name,
		details: req.body.details
	};

	const query_string = 'INSERT INTO task (name, details) VALUES (?, ?)';
	const request_data = [req.body.name, req.body.details];

	db.query(query_string, request_data, (err, result) => {
		res.send(result);
	});
};

exports.get_all_todo = (req, res, next) => {
	db.query('SELECT * FROM task', [], (err, result) => {
		res.send(result);
	});
};

exports.put_todo = (req, res, next) => {
	res.send('This is a PUT');
};

exports.delete_todo = (req, res, next) => {
	res.send('This is a DELETE');
};