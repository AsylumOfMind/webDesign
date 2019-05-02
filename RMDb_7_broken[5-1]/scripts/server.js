(function (window) {
    'use strict';
    var App = window.App || {};
    
    function Server(serverId, db) {
        this.serverId = serverId;
        this.db = db;
    }
    
    Server.prototype.createRating = function (rating) {
        console.log('Adding rating for ' + rating._id);
        this.db.add(rating._id, rating);
    
    };
    
    Server.prototype.submitRating = function (rating) {
        console.log('Sending rating for ' + rating._id);
        this.db.remove(rating._id);
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