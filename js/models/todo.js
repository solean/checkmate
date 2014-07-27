// creates new Class named Todo, with the two attributes title and isCompleted
Checkmate.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});