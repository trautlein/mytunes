// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // adds the next song to the bottom of the queue! how wonderful!
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // removes this item from the queue
    this.trigger('dequeue', this);
  },

  ended: function() {
    // this method triggers an event that tells you that you have ended
    this.trigger('ended', this);
  }

});
