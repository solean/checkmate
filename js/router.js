Checkmate.Router.map(function() {
	this.resource('checkmate', { path: '/' }, function() {
		//additional child routes will go here later
	});
});

Checkmate.CheckmateRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});

Checkmate.CheckmateIndexRoute = Ember.Route.extend({
	model: function () {
		return this.modelFor('checkmate');
	}
});