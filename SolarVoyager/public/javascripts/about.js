/**
 * Created by bcuser on 5/18/16.
 */
define(function () {
    'use strict';
    //Do setup work here

    var about = {
        color: "Green",
        size: "LittleGreen",
        init: function() {
            console.log(about.color);
            //var that = this;
            $('#elf-view').load('/about', function() {
                $('#display').html(about.color + ' ' + about.size);
            });
        }
    };
    return about;

});