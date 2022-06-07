// // import the function sum from the app.js file
// const { sum } = require('./app.js');

// // start your first test
// test('adds 14 + 9 to equal 23', () => {
//     //inside the test we call our sum function with 2 numbers
//     let total = sum(14, 9);

//     // we expect the sum of those 2 numbers to be 23
//     expect(total).toBe(23);
// });



test( 'turns 10 dollars into 1065 yen', () => {
    const {fromDollarToYen} = require('./app.js');
    let total = fromDollarToYen(10);
    expect(total).toBe(1065)
}
)


test("One euro should be 1.206 dollars", function(){
    const { fromEurosToDollar } = require('./app.js')
    const dollars = fromEurosToDollar(3.5)
    const expected = 3.5 * 1.2; 
     expect(fromEurosToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("1000 Yen should be 6 Pounds", () => {
    const {fromYenToPound} = require('./app.js');
    let total = fromYenToPound(1000);
    expect(total).toBe(6)
}
)