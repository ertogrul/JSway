
console.log('Hello')

function getDivisorsCnt(n) {
    // todo
    console.log(n)
    
    for (var a = n; a > 0 ; a-- ) {
    console.log("petla nr " + a);
    }
}

getDivisorsCnt(5)

/*
 * 
 * Find the number of divisors of a positive integer n.
Random tests go up to n = 500000.
Example:
divisors 4  = 3 -- 1, 2, 4
divisors 5  = 2 -- 1, 5
divisors 12 = 6 -- 1, 2, 3, 4, 6, 12
divisors 30 = 8 -- 1, 2, 3, 5, 6, 10, 15, 30
 * 
 * 
 * 
 * n == 0-500 000 
 */
