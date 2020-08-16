
# grader class 
class Grader
    def initialize(name, assignment, grade)
        @name = name
        @assignment = assignment
        @grade = grade
        test_grade(grade)
    end
#  grade calculot method
    def test_grade(grade):

            if grade > 94 and grade < 101 
                @grade= 'A+'
    
            elsif  grade > 90 and grade <= 94 
                @grade= 'A-'
            
            elsif grade > 85 and grade <= 89  
                @grade= 'B+'
    
            elsif grade > 80 and grade <= 84  
                @grade= 'B-'
    
            elsif grade > 75 and grade <= 79 
                @grade= 'C+'
    
            elsif grade > 70 and grade <= 74  
                @grade= 'C-'
    
            elsif grade > 65 and grade <= 69 
                @grade= 'D+'
    
            elsif grade > 60 and grade <= 64 
                @grade= 'A-'
    
            else
                @grade = '(no pass)'
        end
# results print
    def printResults
        puts "#{@name} your grade is #{@grade}, for the #{assignment} test"
    end
end