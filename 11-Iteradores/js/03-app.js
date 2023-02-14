// Fizz Buzz...

// 3 6 9 12 15 ...  FIZZ
// 5 10 15 20 25 ... BUZZ
// 15 30 45 ... Fizz Buzz

for(let i = 1; i < 100; i++  ) {
    if(i % 15 === 0) {
        console.log(`${i} FIZZ BUZZ`)
    } else if(i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if ( i % 5 === 0 ) {
        console.log(`${i} buzz`)
    } 
}