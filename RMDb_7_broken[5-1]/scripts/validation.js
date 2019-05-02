(function(window) {
    'use strict';
    var App = window.App || {};
    
    var Validation = {
        isCompanyEmail: function (email) {
            return /.+@rmdb\.com$/.test(email);
        },
        isNotDup: function (localId,fn) {
            fn(localId, function (remoteId) {
                console.log('remote id is: ' +remoteId+ '\n local id is: ' +localId);
                return (localId === remoteId ? true : false);
            });
            
        }
    };
    
    App.Validation = Validation;
    window.App = App;
})(window);