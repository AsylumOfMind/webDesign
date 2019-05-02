(function (window) {
    'use strict';
    var App = window.App || {};
    
    function Server(serverId, db) {
        this.serverId = serverId;
        this.db = db;
    }
    
    Server.prototype.createRating = function (rating) {
        console.log('Adding rating for ' + rating.movieTitle);
        this.db.add(rating.movieTitle, rating);
    };
    
    Server.prototype.deliverOrder = function (userId) {
        console.log('Sending rating for ' + userId);
        this.db.remove(userId);
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