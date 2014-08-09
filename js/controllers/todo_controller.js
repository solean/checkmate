Checkmate.TodoController = Ember.ObjectController.extend({
	actions: {
		editTodo: function() {
			this.set('isEditing', true);
		},

		acceptChanges: function() {
			this.set('isEditing', false);

			if (Ember.isEmpty(this.get('model.title'))) {
				this.send('removeTodo');
			} else {
				this.get('model').save();
			}
		},

		removeTodo: function() {
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		},

		showDetails: function() {
			this.set('isShowing', true);
			var time = this.get('timeSince');
			console.log(time);
		},

		showNormal: function() {
			this.set('isShowing', false);
		}
	},

	isEditing: false,
	isShowing: false,

	isCompleted: function(key, value) {
		var model = this.get('model');

		if (value === undefined) {
			//property being used as a getter
			return model.get('isCompleted');
		} else {
			//property being used as a setter
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted'),

	timeSince: function() {
		var currentTime = new Date();
		var createdTime = this.get('dateCreated');
		var timeSinceSeconds = Math.round((currentTime.getTime() - createdTime) / 1000);
		var timeSinceMinutes = Math.round(timeSinceSeconds / 60);
		var timeSinceHours = Math.round(timeSinceMinutes / 60);
		var timeSinceDays = Math.round(timeSinceHours / 24);

		if (timeSinceSeconds < 60) {
			return timeSinceSeconds + " seconds since created";
		} else if (timeSinceMinutes < 60) {
			if (timeSinceMinutes === 1) {
				return timeSinceMinutes + " minute since created";
			}
			return timeSinceMinutes + " minutes since created";
		} else if (timeSinceHours < 24) {
			if (timeSinceHours === 1) {
				return timeSinceHours + " hour since created";
			}
			return timeSinceHours + " hours since created";
		} else {
			if(timeSinceDays === 1) {
				return timeSinceDays + " day since created";
			}
			return timeSinceDays + " days since created";
		}
	}.property('model.dateCreated')
});