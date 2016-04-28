/**
 * Created by bcuser on 4/25/16.
 */
$(document).ready(function(){
    console.log('Docuemnt loaded');
    $('#read').click(callRead);
    $('#readJson').click(callReadJson);
    $('#readQux').click(callQux);

    function callRead(){
        console.log('callRead called');
        $.getJSON('/read', function(result){ /**== $.getJSON('http://localhost:30025/read', function(result){**/
            console.log(result);
            $('#display').html(JSON.stringify(result)); //Convert to a JSON strings
        })
    }

    function callReadJson(){
        console.log('callReadJson called'); //Displayed on a browser console
        $.getJSON('name.json', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }

    function callQux(){
        console.log('callQux called');
        $.getJSON('/qux', function(result){ /**== $.getJSON('http://localhost:30025/read', function(result){**/
        console.log(result);
            $('#display').html(JSON.stringify(result)); //Convert to a JSON strings
        })
    }

});

