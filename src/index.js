
  module.exports =  function makeExchange(currency) {
    const result = {};
    if (currency > 10000) {
        result.error = 'You are rich, my friend! We don\'t have so much coins for exchange'; 
    } else if (currency > 0) {
        const   h1 = currency % 50;
                q1 = h1 % 25;
                d1 = q1 % 10;
                h = Math.floor(currency / 50),
                q = Math.floor(h1 / 25),
                d = Math.floor(q1 / 10),
                n = Math.floor(d1 / 5),
                p = d1 % 5;
        if (h) {
            result["H"] = h;
        }
        if (q) {
            result["Q"] = q;
        }
        if (d) {
            result["D"] = d;
        }
        if (n) {
            result["N"] = n;
        }
        if (p) {
            result["P"] = p;
        }
    }
    return result;
}