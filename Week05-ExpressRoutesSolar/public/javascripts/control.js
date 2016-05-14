$(document).ready(function() { 
    'use strict'; 
    console.log('Document loaded');

    $('#getData').click(callGetData);
    $('#getByYear').click(callGetByYear);
    //$('#getByIndex').click(callGetByIndex);

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


    function callGetByYear(){
        console.log('callGetByYear was called');
        $.getJSON('/renewablesByYear/2016', function(response){
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



