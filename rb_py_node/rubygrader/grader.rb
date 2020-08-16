#grader app
require './graderClass.rb'

puts "Hello student, what is your name? "
name = gets

puts "What was your test about? "
assignment = gets 

grade = "".to_i
puts grade
# checking for valid input
while grade == 0
    puts "please enter a grade score from 0 to 100"
    grade = gets.to_i
    if grade < 0 && grade > 100
        grade = ""

    end
end

# initializing and printing
student = Grader.new(name, assignment, grade)
student.printResults()

