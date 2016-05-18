//Load jquery and stick it into '$' = code injection
define(['jquery','work','about'], function($, work,about) { //= This module dependes on jquey
    //Do setup work here

    function showBar() {
        //console.log('Show Bar Clicks called now');
        $('#display2').html('bar');
    }

    var control = {
        color: "black",
        size: "unisize",
        setup: function() {
            $(document).on('click', '#showClick', showBar);
            $('#display2').html(control.color + ' - ' + control.size);
        },
        init: function() {
            //console.log(this.color);
            that = this;
            $('#aboutButton').click(about.init);
            $('#workButton').click(work.init);
            //$('#elf-view').load('/main', this.setup);
            work.init();
        }
    };

    return control;
});
/*
$(document).ready(function() { 
    'use strict'; 
    console.log('Document loaded');

    $('#getData').click(callGetData);
    $('#getByYear').click(callGetByYear);
    $('#getByIndex').click(callGetByIndex);

    function callGetData(){
        console.log('callGetData was called');
        $.getJSON('/renewables', function(response){
            console.log(response);
            $('#display').html(JSON.stringify(response, null, 4));
        })
        .done(function(){
            console.log("second success");
        })
        .fail(function(a,b,c){
            console.log("Error", a,b,c);
        })
        .always(function(){
            console.log("complete");
        });
    }


    /!*function callGetByYear(){
        console.log('callGetByYear was called');
        //Get a user input
        var year = $('#year').val();
        console.log('year:', year)
        
        //Convert a user input to Json format
        var requestQuery = {requestedYear: year};
        
        //Call JSON and pass the user inputmas a parameter
        $.getJSON('/renewablesByYear', requestQuery, function(response){
            console.log(response);
            $('#display').html(JSON.stringify(response, null, 4));
        })
        .done(function(){
            console.log("second success");
        })
        .fail(function(a,b,c){
            console.log("Error", a,b,c);
        })
        .always(function(){
            console.log("complete");
        });
    }*!/

    function callGetByYear(){
        console.log('callGetByYear was called');
        //Get a user input
        var year = $('#year').val();
        console.log('year:', year)

        //Convert a user input to Json format
        var requestQuery = {requestedYear: year};

        //Call JSON and pass the user inputmas a parameter
        $.getJSON('/renewablesByYear/' + year, function(response){
                console.log(response);
                $('#display').html(JSON.stringify(response, null, 4));
            })
            .done(function(){
                console.log("second success");
            })
            .fail(function(a,b,c){
                console.log("Error", a,b,c);
            })
            .always(function(){
                console.log("complete");
            });
    }
    

    /!*function callGetByIndex(){
        console.log('callGetByIndex was called');
        //Get a user input
        var index = $('#index').val();
        console.log('index:', index)

        //Convert a user input to Json format
        var requestQuery = {requestedIndex: index};

        //Call JSON and pass the user inputmas a parameter
        $.getJSON('/renewablesByIndex', requestQuery, function(response){
                console.log(response);
                $('#display').html(JSON.stringify(response, null, 4));
            })
            .done(function(){
                console.log("second success");
            })
            .fail(function(a,b,c){
                console.log("Error", a,b,c);
            })
            .always(function(){
                console.log("complete");
            });
    }*!/
    function callGetByIndex(){
        console.log('callGetByIndex was called');
        //Get a user input
        var index = $('#index').val();
        console.log('index:', index)

        //Convert a user input to Json format
        var requestQuery = {requestedIndex: index};

        //Call JSON and pass the user inputmas a parameter
        $.getJSON('/renewablesByIndex/' + index, function(response){
                console.log(response);
                $('#display').html(JSON.stringify(response, null, 4));
            })
            .done(function(){
                console.log("second success");
            })
            .fail(function(a,b,c){
                console.log("Error", a,b,c);
            })
            .always(function(){
                console.log("complete");
            });
    }
});



*/

