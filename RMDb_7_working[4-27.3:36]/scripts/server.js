(function (window) {
    'use strict';
    var App = window.App || {};
    
    function Server(serverId, db) {
        this.serverId = serverId;
        this.db = db;
    }
    
    Server.prototype.createRating = function (rating) {
        console.log('Adding rating for ' + rating.id);
        this.db.add(rating.id, rating);
    };
    
    Server.prototype.submitRating = function (ratingId) {
        console.log('Sending rating for ' + ratingId);
        this.db.remove(ratingId);
    };
    
    Server.prototype.printRatings = function () {
        var userIdArray = Object.keys(this.db.getAll());
        
        console.log('Server #' + this.serverId + ' has pending ratings:');
        userIdArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this));
    };
    
    App.Server = Server;
    window.App = App;
    
})(window);