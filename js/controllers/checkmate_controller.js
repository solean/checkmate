Checkmate.CheckmateController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			//Get the todo title set by the new todo text field
			var title = this.get('newTitle');
			if (!title) {return false;}
			if (!title.trim()) {return;}

			//create the new Todo model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false,
				dateCreated: new Date()
			});

			//clear the new todo text field
			this.set('newTitle', '');

			//save the new model
			todo.save();
		},

		clearCompleted: function() {
			var completed = this.filterBy('isCompleted', true);
			for (var i = 0; i < completed.length; i++) {
				completed[i].deleteRecord();
				completed[i].save();
			};
		}
	},

	remaining: function() {
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function() {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'todo' : 'todos';
	}.property('remaining'),

	hasCompleted: function() {
		return this.get('completed') > 0;
	}.property('completed'),

	completed: function() {
		return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	allAreDone: function(key, value) {
		if (value === undefined) {
			return !!this.get('length') && this.isEvery('isCompleted'); //!! converts an obj to a non-inverted boolean
		} else {
			this.setEach('isCompleted', value);
			this.invoke('save');
			return value;
		}
	}.property('@each.isCompleted')
});
