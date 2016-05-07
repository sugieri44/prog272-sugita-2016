$(document).ready(function() { 
    'use strict'; 
    console.log('Document loaded');
    $('#getData').click(callGetData);
    
    function callGetData(){
        console.log('callGetData was called');
        $.getJSON('/renewables', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }
});



