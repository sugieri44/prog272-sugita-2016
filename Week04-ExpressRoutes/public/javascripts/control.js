/**
 * Created by bcuser on 4/25/16.
 */
$(document).ready(function(){
    console.log('Docuemnt loaded');
    $('#read').click(callRead);
    $('#readJson').click(callReadJson);
    $('#readQux').click(callQux);
    $('#add').click(add);

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
    
    function add(){
        var operatorA = $('#operatorA').val();//readonly = html(), valuecontrol = val()
        var operatorB = $('#operatorB').val();
        console.log('operators:', operatorA, operatorB);
        var requestQuery = {operatorA: operatorA, operatorB: operatorB};
        //use 'typeof' keyword to find out what the second parameter type 
        $.getJSON('/add', requestQuery, function(sum){ //result pass back from the server
            console.log("Sum:", sum);
            $('#display').html("The sum is: " + sum.sum);
        })
    }

});

