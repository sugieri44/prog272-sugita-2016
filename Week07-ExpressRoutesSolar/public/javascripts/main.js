/**
 * Created by bcuser on 5/16/16.
 */
requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        
    }
});

requirejs(['jquery'], function($) {

    requirejs(['bootstrap', "control"], function(bootstrap, control) {
        control.init();
    });
});