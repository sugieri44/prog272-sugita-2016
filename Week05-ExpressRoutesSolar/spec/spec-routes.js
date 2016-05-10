var request = require('supertest');
var app = require('../app');

describe('Elvenware Simple Plain Suite', function () {
    it('shows we can test', function () {
        expect(true).toBe(true);
    });


    it('renewables', function (done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

});
