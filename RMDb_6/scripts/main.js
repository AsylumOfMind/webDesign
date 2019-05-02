(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-movie-rating="form"]';
  var CHECKLIST_SELECTOR = '[data-movie-rating="checklist"]';
  var App = window.App;
  var Server = App.Server;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var myServer = new Server('ncc-1701', new DataStore());
  window.myServer = myServer;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(/*myServer.createOrder.bind(myServer));
  console.log(formHandler);*/
                                function (data) {
      myServer.createRating.call(myServer, data);
      checkList.addRow.call(checkList, data);
    });
})(window);