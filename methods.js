const student = {
    name: 'Kodom Ali', 
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){ /* method এর ভিতরে কোনো Object এর property পেতে হলে
    this.ওই property এর নাম লিখতে হয়। */
       return this.name + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam(); /* এক মেথড এর ভিতরে অন্য একটা মেথডকে কল করা যায়। */
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips; /* এক মেথড এর ভিতরে অন্য একটা 
        মেথডের মান সেট করা যায়। */
        return this.money;
    }
}
const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining = student.treatDey(900, 100);
console.log(remaining);
const dolaRemaining = student.treatDey(500, 50);
console.log(dolaRemaining)