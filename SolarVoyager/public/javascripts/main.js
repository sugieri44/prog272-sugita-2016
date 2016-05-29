/**
 * Created by bcuser on 5/16/16.
 */
requirejs.config({
    //baseUrl = start from here
    baseUrl: '.',
    //They won't get loaded until we reference them
    paths: {
        //Whenever you see the word 'jquery', look into this path
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        home: 'javascripts/home',
        about: 'javascripts/about',
        renewables: 'javascripts/renewables/renewables',
        renewablesByIndex: 'javascripts/renewables/renewablesByIndex',
        renewablesByYear: 'javascripts/renewables/renewablesByYear'
    }
});

requirejs(['jquery'], function($) {
    'use strict';
    requirejs(['bootstrap', 'control'], function(bootstrap, control) {
        control.init();
    });
});
