/**
 * Created by bcuser on 4/25/16.
 */
$(document).ready(function(){
    console.log('Docuemnt loaded');
    $('#read').click(callRead);
    $('#readJson').click(callReadJson);

    function callRead(){
        console.log('callRead called');
        $.getJSON('/read', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result)); //Convert to a JSON strings
        })
    }

    function callReadJson(){
        console.log('callRead called');
        $.getJSON('name.json', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }

});

