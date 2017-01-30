var first_n_primes = require('../src/first_n_primes.js');

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// Need to iterate and chain these functions
// I can't figure it out. So doing this hack
suite.add('100', function() {
    first_n_primes(100);
}).add('200', function() {
    first_n_primes(200);
}).add('300', function() {
    first_n_primes(300);
}).add('400', function() {
    first_n_primes(400);
}).add('500', function() {
    first_n_primes(500);
}).add('600', function() {
    first_n_primes(600);
}).add('700', function() {
    first_n_primes(700);
}).add('800', function() {
    first_n_primes(800);
}).add('900', function() {
    first_n_primes(900);
}).add('1000', function() {
    first_n_primes(1000);
}).add('1100', function() {
    first_n_primes(1100);
}).add('1200', function() {
    first_n_primes(1200);
}).add('1300', function() {
    first_n_primes(1300);
}).add('1400', function() {
    first_n_primes(1400);
}).add('1500', function() {
    first_n_primes(1500);
}).add('1600', function() {
    first_n_primes(1600);
}).add('1700', function() {
    first_n_primes(1700);
}).add('1800', function() {
    first_n_primes(1800);
}).add('1900', function() {
    first_n_primes(1900);
}).add('2000', function() {
    first_n_primes(2000);
}).add('3000', function() {
    first_n_primes(3000);
}).add('4000', function() {
    first_n_primes(4000);
}).add('5000', function() {
    first_n_primes(5000);
}).add('6000', function() {
    first_n_primes(6000);
}).add('7000', function() {
    first_n_primes(7000);
}).add('8000', function() {
    first_n_primes(8000);
}).add('9000', function() {
    first_n_primes(9000);
}).add('10000', function() {
    first_n_primes(10000);
}).add('20000', function() {
    first_n_primes(20000);
}).add('30000', function() {
    first_n_primes(30000);
}).on('complete', function() {
    this.forEach(function(element) {
        // hz = The number of executions per second.
        // hz will decrease as computational cost increases.
        // Taking the inverse of hz to make create a relative
        // scale which increases with computational cost.
        var inverse_hz = 1000000/element.hz //
        console.log(element.name + ', ' + inverse_hz)
    })
}).run();




// 100, 0.6388991804082625
// 200, 1.159704638699968
// 300, 1.8138147681619825
// 400, 2.2610072049592453
// 500, 2.8711681216648404
// 600, 3.5909157446420013
// 700, 4.227146324869906
// 800, 5.101184731310374
// 900, 5.972695579963172
// 1000, 7.160615047704622
// 1100, 8.420676148629497
// 1200, 8.943974453730549
// 1300, 10.096837710948883
// 1400, 11.229903827842312
// 1500, 12.405525931821193
// 1600, 13.660003068283949
// 1700, 16.34434437631295
// 1800, 22.080582791973445
// 1900, 20.271476506484827
// 2000, 24.08308096103372
// 3000, 26.059339648357636
// 4000, 35.322021361578756
// 5000, 47.44847527898325
// 6000, 56.40319352197253
// 7000, 67.10825213974266
// 8000, 78.4453125
// 9000, 90.4776347826087
// 10000, 106.23483033318999
// 20000, 211.72051282051288
// 30000, 329.03929320155737



