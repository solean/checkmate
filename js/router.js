Checkmate.Router.map(function() {
	this.resource('checkmate', { path: '/' }, function() {
		//additional child routes
		this.route('active');
		this.route('completed');
	});
});

Checkmate.CheckmateRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});

Checkmate.CheckmateIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('checkmate');
	}
});

Checkmate.CheckmateActiveRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return !todo.get('isCompleted');
		})
	},
	renderTemplate: function(controller) {
		this.render('checkmate/index', {controller: controller});
	}
});

Checkmate.CheckmateCompletedRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return todo.get('isCompleted');
		})
	},
	renderTemplate: function(controller) {
		this.render('checkmate/index', {controller: controller});
	}
});

CheckMate.CheckmateShowDetailsRoute = Ember.Route.extend({
	model: function() {
		return this.store.fileter('todo', function(todo) {
			return todo.get('isShowing');
		})
	},
	renderTemplate: function(controller) {
		this.render('checkmate/index/show-details', {controller: controller});
	}
});
