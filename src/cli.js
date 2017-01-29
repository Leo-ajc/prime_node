#!/usr/bin/env node

var first_n_primes = require('./first_n_primes'),
    args = process.argv.slice(2),
    n = args[0]

console.log(first_n_primes(n));
