// creates new Class named Todo, with the two attributes title and isCompleted
Checkmate.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean'),
	dateCreated: DS.attr('date')
});

// Checkmate.Todo.FIXTURES = [
//  {
//  	id: 1,
//  	title: 'Learn Ember.js',
//  	isCompleted: true
//  },
//  {
//  	id: 2,
//  	title: '...',
//  	isCompleted: false
//  },
//  {
//  	id: 3,
//  	title: 'Profit!',
//  	isCompleted: false
//  }
// ];