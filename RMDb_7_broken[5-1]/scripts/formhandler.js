(function (window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }
  

  FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function (event) {
      event.preventDefault();
      
      var emailAddress = $('#emailInput').val();
      var movieTitle = $('#titleInput').val();
      
      emailAddress = checkLength(emailAddress);
      movieTitle = checkLength(movieTitle);
      
      var shuffle = shuffleThis(emailAddress,movieTitle);
      $('#autoID').val(shuffle);
    

      var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset(); 
      this.elements[0].focus();
    });
  };
  
  FormHandler.prototype.addEmailHandler = function (fn) {
    console.log('setting email handler for form');
    this.$formElement.on('input', '[name="emailAddress"]', function (event) {
      var emailAddress = event.target.value;
      var message = '';
      if (fn(emailAddress)) {
        event.target.setCustomValidity('');
      } else {
        message = emailAddress + ' is not an authorized email address!';
        event.target.setCustomValidity(message);
      }
    });
  };
  
  FormHandler.prototype.addDupHandler = function (fnV,fnR) {
    console.log('setting dup handler for form');
    this.$formElement.on('change', '[name="id"]', function (event) {
      var localId = event.target.value;
      var message = '';
      if (fnV(localId,fnR)) {
        event.target.setCustomValidity('');
      } else {
        message = 'User has already submitted a rating for this movie!';
        event.target.setCustomValidity(message);
      }
    });
  };
  
  
  function checkLength (input) {
          
          while (input.length < 32) input += '0';
          return input;
      }
      
      function shuffleThis (e,m) {
        var s = '';
        for (var i=0;i<32;i++) {
          s = s + '' + e.charAt(i) + m.charAt(i);
        }
        var r = '';
        for (var i=0;i<64;i++) {
          r = r + '' + s.charCodeAt(i);
        }
        r = r.substring(0,64);
        r = parseInt(r);
        r = r.toString(16);
        var v = 64;
        var c = 0;
        for (i=0;i<r.length;i++) {
          if (r.charAt(i) == '0' && r.charAt(i-1) !== '0') {
            v = i;
            c = 1;
          }
          
          else if (r.charAt(i) == '0' && r.charAt(i-1) == '0') {
            c++;
          }
          else {
            v = 64;
          }
        }
        r = r.substring(0,14);
        r = r + '_' + c;
        return r;
      }
  

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
