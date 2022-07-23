class Student {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.scores = [];
}
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
}
    addScore(score){
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce((a,b) => (a+b));
        return (sum/this.scores.length)
    }
}
let student1 = new Student("Colt", "Steele");
student1.addScore(92)
student1.addScore(87)
student1.addScore(85)
student1.addScore(97)
student1.calculateAverage()
console.log(student1.scores)
console.log(student1.calculateAverage())
