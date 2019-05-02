(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-movie-rating="form"]';
  var CHECKLIST_SELECTOR = '[data-movie-rating="checklist"]';
  var SERVER_URL = 'https://web-design-asylumofmind.c9users.io:8081/ratings';
  var App = window.App;
  var Server = App.Server;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var myServer = new Server('ncc-1701', remoteDS);
  window.myServer = myServer;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myServer.submitRating.bind(myServer));
  var formHandler = new FormHandler(FORM_SELECTOR);

  
  formHandler.addSubmitHandler(function (data) {
      myServer.createRating(data);
      checkList.addRow(data);
    });
    
    formHandler.addEmailHandler(Validation.isCompanyEmail);
    /*console.log(remoteDS.getAll(function (data) { console.log(data); }));*/
    
    formHandler.addDupHandler(Validation.isNotDup,remoteDS.get);
    
})(window);