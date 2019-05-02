(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-movie-ratingr="form"]';
  var App = window.App;
  var Server = App.Server;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myServer = new Server('ncc-1701', new DataStore());
  window.myServer = myServer;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(myServer.createOrder.bind(myServer));
  console.log(formHandler);
})(window);