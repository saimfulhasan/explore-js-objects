const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
// console.log(pair);  
/* Output: const twoDimension = [ [ 'color', 'yellow' ], 
[ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]] */



console.log(bottle);
Object.seal(bottle); /* seal ইউজ করলে আগের কোনো property delete করা যাবে না, নতুন 
কোনো property এড করা যাবে না তবে আগের property এর (মান পরিবর্তন করা যাবে)*/
console.log(bottle);

Object.freeze(bottle); /* freeze ব্যাবহার করলে আগের property এর মান পরিবর্তন করা যাবে 
না, delete করা যাবে না এবং নতুন কোনো মান এড ও করা যাবে না। */
delete bottle.isCleaned;
bottle.price = 1000; /* seal ব্যাবহার করলে আগের property এর (মান পরিবর্তন করা যাবে) */
bottle.height = 12; /* কিন্তু seal ব্যাবহার করলে নতুন কোনো property এড করা যাবে না। */
console.log(bottle);