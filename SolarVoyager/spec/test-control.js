define(['control'], function(control) {
    'use strict';

    describe('Control Suite', function() {

        it('expects true to be true', function() {
            expect(true).toBe(true);
        });

        it('expects control.init to be defined', function() {
            expect(control.init).toBeDefined();
        });

    });

});