'use strict';

const todo = require(__dirname + '/../controllers/controller');

module.exports = (router) => {
	
	router.delete('/todo', todo.delete_todo);

	router.put('/todo', todo.put_todo);

	router.post('/todo', todo.post_todo);

	router.get('/todo', todo.get_all_todo);
	
	router.all('*', (req, res, next) => {
		res.send({message: 'Unmatched route :('});
	});	

	return router;
};