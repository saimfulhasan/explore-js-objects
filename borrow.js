const kodomAli = {
    name: 'Kodom Ali', 
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
       return this.name + ' is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
const result = kodomAli.exam();
// console.log(result)




// kodomAli এর মেথডগুলো ধার করে badamAli এর উপরে প্রয়োগ করবো।
const badamAli = {
    name: 'kacha badam',
    money: 8000
}
const result2 = kodomAli.exam.call(badamAli/* .this এর মান */);
console.log(result2);

const badamMoney = kodomAli.treatDey.call(badamAli/* .this এর মান */, 400, 40 /*Parameters*/);
console.log(badamMoney);

const badamMoney2 = kodomAli.treatDey.apply(badamAli/* .this এর মান */, [1000, 100]);
console.log(badamMoney2);
/* Note: .call ইউজ করলে parameters কমা দিয়ে বসাতে হবে আর .apply ইউজ করলে 
array এর ভিতর বসাতে হবে। */

const badamAliTreat = kodomAli.treatDey.bind(badamAli);
const remaining = badamAliTreat(1000, 100)
console.log(remaining);
/* Note: .bind নতুন একটা ফাংশন ক্রিয়েট করে। */