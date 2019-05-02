/* global $*/
$(document).ready(function(){


//generate key id
  $('#titleInput, #emailInput').on('blur', function(){   
    
    var emailAddress = $('#emailInput').val();
    var movieTitle = $('#titleInput').val();
    
    if (emailAddress !== '' && movieTitle !== '') {
        
        emailAddress = checkLength(emailAddress);
        movieTitle = checkLength(movieTitle);
        
        var shuffle = shuffleThis(emailAddress,movieTitle);
    }
    
    function checkLength (input) {
        
        while (input.length < 32) input += '0';
        return input;
    }
    
    function shuffleThis (e,m) {
      var s;
      for (i=0;i<32;i++) {
        s = s + '' + e.charAt(i) + m.charAt(i);
      }
      var r;
      for (i=0;i<64;i++) {
        r = r + '' + s.charCodeAt(i);
      }
    }
    
  });
});