$(document).ready(function() { 
    'use strict'; 
    console.log('Document loaded');

    $('#getData').click(callGetData);
    
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
});



