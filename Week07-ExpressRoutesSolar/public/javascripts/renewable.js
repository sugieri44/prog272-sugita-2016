/**
 * Created by bcuser on 5/23/16.
 */
define(function() {
    var renewable = {
        init: function() {
            console.log("renewable.init() was called");
            $('#elf-view').load('/renewables', function(response) {
                $('#display').html(response);
            });
        }
    };
    return renewable;
});