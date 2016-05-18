/**
 * Created by bcuser on 5/18/16.
 */
define(function() {
    var work = {
        color: "red",
        size: "big",
        init: function() {
            console.log(work.color);
            $('#elf-view').load('/work', function() {
                $('#display').html(work.color + ' ' + work.size);
            });
        }
    };
    return work;
});