
# grader class for individual student
class Grader():
    #class constructor
     def __init__(self, name, assigment, grade):
          self.name = name
          self.assigment = assigment
          self.grade = ''
          self.test_grade(grade)
# print method 
     def print_results(self):
         print(
              'Hello {}, your grade is {} for the {} test '.format(self.name, self.grade, self.assigment)
             )
    #  test calculator
     def test_grade(self, grade):

        if(grade > 94 and grade < 101):
            self.grade= 'A+'

        elif(grade > 90 and grade <= 94 ):
            self.grade= 'A-'
        
        elif(grade > 85 and grade <= 89 ):
            self.grade= 'B+'

        elif(grade > 80 and grade <= 84 ):
            self.grade= 'B-'

        elif(grade > 75 and grade <= 79 ):
            self.grade= 'C+'

        elif(grade > 70 and grade <= 74 ):
            self.grade= 'C-'

        elif(grade > 65 and grade <= 69 ):
            self.grade= 'D+'

        elif(grade > 60 and grade <= 64 ):
            self.grade= 'A-'

        else:
            self.grade = '(no pass)'