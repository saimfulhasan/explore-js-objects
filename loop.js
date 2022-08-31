const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }


// 1. For of can not used with objects
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };


        // First option to loop through an object
const keys = Object.keys(bottle); /* এখানে bottle Object এর keys গুলো পেয়েছি */
// console.log(keys);
for(const key of keys){ /* প্রাপ্ত keys গুলোকে For-of Loop করে Array এর ভিতরে রাখবে। */
    // console.log(key, bottle[key]);
}
/* 
3 ways to read object properties
bottle.color
bottle['color']
bottle[key]
*/

        // Second option to loop through an object
// for in loop /* IMPORTANT!!! */
for( const key in bottle){
    const value = bottle[key];
    // console.log(key, value);
}

        // Third option to loop through an object
// advanced For-of Loop with destructuring [key, value]
const pair = Object.entries(bottle);
// console.log(pair); 
/* Output: 
    [
        [ 'color', 'yellow' ],
        [ 'price', 50 ],
        [ 'isCleaned', true ],
        [ 'capacity', 1 ]
    ] 
*/
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}
