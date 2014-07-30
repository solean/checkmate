Checkmate.Router.map(function() {
	this.resource('checkmate', { path: '/' });
});

Checkmate.CheckmateRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});