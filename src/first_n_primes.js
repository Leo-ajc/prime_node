module.exports = (function () {
    var cached_primes = [2, 3, 5, 7];
    var max_checked = cached_primes[cached_primes.length - 1] + 1;

    function segment_sieve() {
        var sieved_primes = [];
        var max_segment_size = 1000000; // max_segment_size must be an even number
        var max_cached_prime = cached_primes[cached_primes.length - 1];

        var segment_min = max_checked
        var segment_max = Math.min(
            (segment_min + max_segment_size), (max_cached_prime * 2)
        );
        var root = parseInt(Math.floor(Math.sqrt(segment_max)));

        var segment = [];
        for (var i = segment_min + 1; i <= segment_max; i++) {
            if (i % 2 != 0) { // Only odd numbers needed
                segment.push(i);
            }
        }

        for (var i = 1; ; i++) {
            var prime = cached_primes[i];
            if (prime > root) break;
            var composite_index = (-(segment_min + 1 + prime) / 2) % prime;
            while(composite_index < segment.length) {
                segment[composite_index] = false;
                composite_index += prime;
            }
        }

        max_checked = segment_max;

        // Remove false from array
        for (var i = 0; i < segment.length; i++) {
            if (segment[i]) {
                sieved_primes.push(segment[i])
            }
        }
        return sieved_primes
    }

    return function (n) {
        while(cached_primes.length < n) {
            cached_primes = cached_primes.concat(segment_sieve())
        }
        return cached_primes.slice(0,n);
    }
})();

//console.log(first_n_primes(30));
