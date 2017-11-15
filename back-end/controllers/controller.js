'use strict';

const db = require(__dirname + '/../lib/mysql');

exports.post_people = (req, res, next) => {
	const data = {
		name: req.query.name,
		details: req.query.detail
	};
	console.log(req.query);
	const query_string = 'INSERT INTO people (name, details) VALUES (?, ?)';

	db.query(query_string, [req.query.name, req.query.details], (err, result) => {
		res.send(result);
	});
};

exports.get_people = (req, res, next) => {
	const data = {
		name: req.query.name
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