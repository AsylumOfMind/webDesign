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


//render star selector
$(document).ready(function(){

var starA, starB, starC, starD;

  $('#starSelector').on('click mouseover mouseout','.star',function(event){
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
      /*else if (event.type == 'mouseout') {
        $('.star:nth-of-type(-n+'+starA+')').css('color','blue');
        $('.star:nth-of-type(n+'+starB+')').css('color','grey');
      }*/
  });
  
  $('#starSelector').on('mouseout', function() {
    $('.star:nth-of-type(-n+'+starA+')').css('color','blue');
    $('.star:nth-of-type(n+'+starB+')').css('color','grey');  	
  });
});
