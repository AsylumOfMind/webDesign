(function (window) {
    'use strict';
    
    var App = window.App || {};
    var $ = window.jQuery;
    
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }
    
    CheckList.prototype.addClickHandler = function (fn) {
        this.$element.on('click', 'input', function (event) {
            var id = event.target.value;
            this.removeRow(id);
            fn(id);
        }.bind(this));
    };
    
    CheckList.prototype.addRow = function (movieRating) {
        this.removeRow(movieRating._id);
        var rowElement = new Row(movieRating);
        
        //Add the new row instance's $element property to the checklist
        this.$element.append(rowElement.$element);
        $('#checklist label').css('border-top','2px inset');
    };
    
    CheckList.prototype.removeRow = function (id) {
        this.$element
            .find('[value="' + id + '"]')
            .closest('[data-movie-rating="checkbox"]')
            .remove();
    };
    
    function Row(movieRating) {
        var $div = $('<div></div>', {
            'data-movie-rating': 'checkbox', 
            'class': 'checkbox'
        });
        
        var $label = $('<label></label>');
        
        var $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: movieRating._id
        });
        
        var description = 
        '<p><span style="font-weight:bold;">'
        + movieRating.movieTitle + ' </span><span>(' 
        + movieRating.date + ')</span></p>';
        
        description += '<p><b>Director: </b>' + movieRating.director + '</p>';
        description += '<p><b>Writers: </b>' + movieRating.writers + '</p>';
        description += '<p><b>Stars: </b>' + movieRating.stars + '</p>';
        description += '<p><b>Storyline</b></p><p>' + movieRating.storyline + '</p>';
        description += '<p><b>#</b>' + movieRating.genre + ' ';
        description += ' [' + movieRating.rating + '&#x2605;]</p>';
        description += '<p><b>Submitted by: </b>' + movieRating.emailAddress + ' [' + movieRating.rating + '&#x2605;]</p>';
        
        $label.append($checkbox);
        $label.append(description);
        $div.append($label);
        
        this.$element = $div;
        
    }
    
    App.CheckList = CheckList;
    window.App = App;
})(window);