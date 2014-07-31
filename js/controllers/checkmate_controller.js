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
				isCompleted: false
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
	}.property('remaining')
});