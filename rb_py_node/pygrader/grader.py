# python grader file
from grader_class import Grader

name = raw_input(' Please Student enter your name ')
assignment = raw_input('What was your test about ')

grade = ''
# checkting for the right data type
while( grade is not int):
    try:
        grade = int(raw_input('Can you please enter your score '))

        if(grade < 0 or grade > 100):
          print('Your score is either 0 or 100')
          grade = ''
        else:
          break
    except ValueError:
        print('Please enter a valid score')

# intatiantion and printing
student = Grader(name, assignment, grade)
student.print_results()