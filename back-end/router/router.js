'use strict';

const people = require(__dirname + '/../controllers/controller');

module.exports = (router) => {
	
	router.get('/people', people.get_people);

	router.get('/peoples', people.get_all_people);

	router.delete('/people', people.delete_people);

	router.put('/people', people.put_people);

	router.post('/people', people.post_people);
	
	router.all('*', (req, res, next) => {
		res.send({message: 'Unmatched route :('});
	});	

	return router;
};