/**
 * Created by bcuser on 4/20/16.
 */

var MyObject = (function() {

    function MyObject() {
        $('#sendString').click(showString);
        $('#getItems').click(showItems);
        $('#getMarie').click(showMarie);
    }

    function showString() {
        $('#stringHolder').html('Send string was clicked');
    }

    MyObject.prototype.readyCalled = function() {
        $("#readyCalled").html("Ready was called and myObjected created");
    };

    function showItems() {
        $("#myList").append('<li>' + 'item01' + '</li>');
        $("#myList").append('<li>' + 'item02' + '</li>');
        $("#myList").append('<li>' + 'item03' + '</li>');
    }

    function showMarie(){
        var marie = {
            "firstName": "Marie",
            "lastName": "Curie",
            "city": "Paris",
            "country": "France"
        };

        for (var property in marie) {
            if (marie.hasOwnProperty(property)) {
                $("#myList").append('<li>' + marie[property] + '</li>');
            }
        }
    }

    return MyObject;
}());


$(document).ready(function() {
    var myObject = new MyObject();
    myObject.readyCalled();
});