(function (window) {
    'use strict';
    var App = window.App || {};
    
    function Server(serverId, db) {
        this.serverId = serverId;
        this.db = db;
    }
    
    Server.prototype.createOrder = function (rating) {
        console.log('Adding rating for ' + rating.movieTitle);
        this.db.add(rating.movieTitle, rating);
    };
    
    Server.prototype.deliverOrder = function (customerId) {
        console.log('Sending rating for ' + customerId);
        this.db.remove(customerId);
    };
    
    Server.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.db.getAll());
        
        console.log('Server #' + this.serverId + ' has pending ratings:');
        customerIdArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this));
    };
    
    App.Server = Server;
    window.App = App;
    
})(window);