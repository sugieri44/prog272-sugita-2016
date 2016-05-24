/**
 * Created by bcuser on 5/23/16.
 */
define(function() {

    function callGetByIndex(){
        console.log('callGetByIndex was called');
        //Get a user input
        var index = $('#index').val();
        console.log('index:', index)

        //Call JSON and pass the user inputs as a parameter
        $.getJSON('/renewablesByIndex/' + index, function(response){
                console.log(response);
                $('#debug').html(JSON.stringify(response, null, 4));
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

    var renewablesByIndex = {
        color: "red",
        size: "big",
        init: function() {
            console.log("renewablesByIndex.init() was called");
            $('#elf-view').load('/renewable-by-index', function(response) {
                $('#display').html(renewablesByIndex.color);
                $('#display2').html(renewablesByIndex.size);
                //When the input control changes, call callGetByIndex
                $('#index').change(function(){
                    callGetByIndex();
                });
            });
        }
    };
    return renewablesByIndex;
});