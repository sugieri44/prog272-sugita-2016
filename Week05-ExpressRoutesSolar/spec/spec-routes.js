var request = require('supertest');
var app = require('../app');

fdescribe('Elvenware Spec Routes Suite', function () {
    it('shows we can test', function () {
        expect(true).toBe(true);
    });


    it('renewables', function (done) {
        request(app)//Take 'app' as a parameter
            .get('/renewables') //and get '/renewables'
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it('renewables first object body', function (done) {
        request(app) 
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                expect(response.body.renewables[0].Year).toBe('2017');
            })
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it('shows we can get renewables objects by index', function (done) {
        request(app)
            .get('/renewablesByIndex/0')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                expect(response.body.renewables.Year).toBe('2017');
            })
            .end(function (err, res) {
                if(err) {throw err;}
                done();
            });
    });

    it('shows we can get renewables objects by year', function (done) {
        request(app)
            .get('/renewablesByYear/2017')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                expect(response.body.renewables.Year).toBe('2017');
            })
            .end(function (err, res) {
                if(err) { throw err; }
                done();
            });
    });

});
