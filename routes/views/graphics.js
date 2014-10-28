var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'graphics';
	
	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find({type: 'graphic'}).sort({order:1}));
	
	// Render the view
	view.render('graphics');
	
};
