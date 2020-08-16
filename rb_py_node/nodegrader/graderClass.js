// grader class for each student
class Grader{
    constructor(name, assignment, grade){
      this.name = name
      this.assignment = assignment
      this.grade = ''
      this.gradeConverter(grade)
    }
// grade calcullator
    gradeConverter = (grade) => {
         
     if(grade > 94 && grade < 101){
        this.grade= 'A+'
    }
    else if(grade > 90 && grade <= 94 ){
        this.grade= 'A-'
    }
    else if(grade > 85 && grade <= 89 ) {
        this.grade= 'B+'
    }
    else if(grade > 80 && grade <= 84 ){
        this.grade= 'B-'
    }
    else if(grade > 75 && grade <= 79 ){
        this.grade= 'C+'
    }
    else if(grade > 70 && grade <= 74 ){
        this.grade= 'C-'
    }
    else if(grade > 65 && grade <= 69 ){
        this.grade= 'D+'
    }
    else if(grade > 60 && grade <= 64 ){
        this.grade= 'A-'
    }
    else {
        this.grade = '(no pass)'
    }
 }
// print the resultsa methods
 printResults = () => {
     console.log(`${this.name} your grade is ${this.grade} for the ${this.assignment} test`)
 }
}
// exporting the class
module.exports = Grader