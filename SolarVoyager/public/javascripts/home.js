/**
 * Created by charlie on 5/18/16.
 */

define(['settings'], function(settings) {
    'use strict';

    function getSettings() {
        $.getJSON('/database-settings/getSettings', function(response) {
                $('#debug').html(JSON.stringify(response, null, 4));
                $('#dataType').val(response.settings.dataType);
                $('#dataSource').val(response.settings.dataSource);
                $('#comment').val(response.settings.comment);
            })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .done(function() {
                console.log('second success');
            })
            .always(function() {
                console.log('complete');
            });
    }

    var home = {
        color: 'red',
        size: 'big',
        init: function() {
            console.log(home.color);
            $('#elf-view').load('/home', function() {
                $('#display').html(home.color);
                $('#display2').html(home.size);
                getSettings();
                $('#target').submit(function(event) {
                    event.preventDefault();
                    var userFormData = $(this).serialize();
                    $('#debug').html(userFormData);
                    var userData = {
                        dataType: $('#dataType').val(),
                        dataSource: $('#dataSource').val(),
                        comment: $('#comment').val()
                    };
                    $.post('/database-settings/updateSettings', userData, function(result) {
                        console.log(settings);
                        settings.setSettings(result.query);
                    });
                });

            });
        }
    };
    return home;
});
