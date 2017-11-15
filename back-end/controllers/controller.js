'use strict';

const db = require(__dirname + '/../lib/mysql');

exports.post_people = (req, res, next) => {
	const data = {
		name: req.body.name,
		details: req.body.details
	};

	const query_string = 'INSERT INTO people (name, details) VALUES (?, ?)';
	const request_data = [req.body.name, req.body.details];

	db.query(query_string, request_data, (err, result) => {
		res.send(result);
	});
};

exports.get_people = (req, res, next) => {
	const data = {
		name: req.body.name
	};
	db.query('SELECT * FROM people where name = ?', [data.name], (err, result) => {
		res.send(result);
	});
};

exports.get_all_people = (req, res, next) => {
	db.query('SELECT * FROM people', [], (err, result) => {
		res.send(result);
	});
};

exports.put_people = (req, res, next) => {
	res.send('This is a PUT');
};

exports.delete_people = (req, res, next) => {
	res.send('This is a DELETE');
};