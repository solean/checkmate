// Create a new Ember.js application
window.Checkmate = Ember.Application.create();

Checkmate.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'checkmate-emberjs'
});