/**
 * Created by bcuser on 5/23/16.
 */
define(function() {

    function callGetData(){
        console.log('callGetData was called');
        $.getJSON('/renewables', function(response){
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
    
    var renewables = {
        color: "red",
        size: "small",
        init: function() {
            console.log("renewables.init() was called");
            $('#elf-view').load('/renewables/renewables-page', function(response) {
                $('#display').html(renewables.color);
                $('#display2').html(renewables.size);
                callGetData();
            });
        }
    };
    return renewables;
});