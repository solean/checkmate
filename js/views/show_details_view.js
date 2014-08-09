Checkmate.ShowDetailsView = Ember.View.extend({
	templateName: 'checkmate/index/show-details'
	//template: Ember.Handlebars.compile(Todo.get('timeSince'))
});

Ember.Handlebars.helper('show-details', Checkmate.ShowDetailsView);