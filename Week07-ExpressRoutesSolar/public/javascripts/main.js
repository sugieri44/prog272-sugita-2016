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
        work: 'javascripts/work',
        about: 'javascripts/about'
    }
});

requirejs(['jquery'], function($) {

    requirejs(['bootstrap', "control"], function(bootstrap, control) {
        control.init();
    });
});