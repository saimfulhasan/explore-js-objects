// console.log(this);
const kodomAli = {
    name: 'Kodom Ali', 
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this); /* Object */
       return this.name + ' is participating in an exam';
    },
    examArrow: () =>{
        console.log(this); /* Window */
    },
    examNested: () =>{
        const arrow = () => {
            console.log(this); /* Window */
        }
        arrow();
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
kodomAli.exam();


const badamAli = {
    name: 'kacha badam Ali',
    money: 8000
}
badamAli.exam = kodomAli.exam;
badamAli.exam();


function clickHandler(){
    console.log('inside click handler', this); /* Window */
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this); /* Element */
})

/*
1. JS এর Object এর মধ্যে regular method বা regular function এর ভিতরে this ইউজ করলে
সেটি ওই Object কেই ইন্ডিকেট করে।
2. JS এর Object এর মধ্যে arrow function এর ভিতরে this ইউজ করলে window কে ইন্ডিকেট করে।

3. onclick() হিসেবে কোনো ফাংশন এর ভিতরে this ইউজ করলে window কে ইন্ডিকেট করে।
4. eventListenern দিয়ে কোনো ফাংশন এর ভিতরে this ইউজ করলে সেটি ওই element কে ইন্ডিকেট করে।
*/