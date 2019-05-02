/* global $ */
//render year selector
var max = new Date().getFullYear(),
    min = 1878,
    select = document.getElementById('dateInput');

for (var i = max; i>=min; i--){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}
/*var sel = document.getElementById("dateInput");
sel.options[25].selected = true;*/



$(document).ready(function(){


//render star selector
  $('#starSelector').on('click mouseover mouseout','.star',function(event){
    
      var starA, starB, starC, starD;
  		let star = event;
  		if (star.type == 'click') {
        starA = $(star.target).data('star-value');
        starB = starA+1;
        $('.star:nth-of-type(-n+'+starA+')').css('color','blue');
        $('.star:nth-of-type(n+'+starB+')').css('color','grey');
        $('#starRating').val(starA);
        $('#starSelector label').text(starA);
      }
      else if (event.type == 'mouseover') {
      	starC = $(star.target).data('star-value');
        starD = starC+1;
        $('.star:nth-of-type(-n+'+starC+')').css('color','black');
        $('.star:nth-of-type(n+'+starD+')').css('color','grey');
      }
      else if (event.type == 'mouseout') {
        $('.star:nth-of-type(-n+'+starA+')').css('color','blue');
        $('.star:nth-of-type(n+'+starB+')').css('color','grey');
      }
  });
  /*
  $('#starSelector').on('mouseout', function() {
    $('.star:nth-of-type(-n+'+starA+')').css('color','blue');
    $('.star:nth-of-type(n+'+starB+')').css('color','grey');  	
  });*/

//generate key id
  $('#titleInput, #emailInput').on('blur', function(){   
    
    var emailAddress = $('#emailInput').val();
    var movieTitle = $('#titleInput').val();
    
    if (emailAddress !== '' && movieTitle !== '') {
        console.log("test");
        emailAddress = checkLength(emailAddress);
        movieTitle = checkLength(movieTitle);
        
        var shuffle = shuffleThis(emailAddress,movieTitle);
        $('#autoID').val(shuffle);
    }
    
    function checkLength (input) {
        
        while (input.length < 32) input += '0';
        console.log(input);
        return input;
    }
    
    function shuffleThis (e,m) {
      var s = '';
      for (i=0;i<32;i++) {
        s = s + '' + e.charAt(i) + m.charAt(i);
      }
      var r = '';
      for (i=0;i<64;i++) {
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
        console.log(r.charAt(i)+' '+r.charAt(i-1)+' '+v+' '+c);
      }
      r = r.substring(0,14);
      r = r + '#' + c;
      return r;
    }
    
  });
});