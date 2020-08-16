
// javascript grader app
const readline = require('readline')
const Grader = require('./graderClass')

const read = readline.Interface({
    input: process.stdin,
    output: process.stdout

})

// console stream input and output
read.question("Hello student, what is your name ", (name) => {
    
   read.question("On what topic was your test about? ", (assignment) => {
    
       read.question("Can you please enter your score? ", (grade) => {
        let num = parseInt(grade)
      
        const student = new Grader(name, assignment, num)
        student.printResults()
        // closing stream
        read.close()
       })
   })
})


