'''
Create a program that prompts the user ten times for a test score between 60 and 100. Each time a score is generated, your program should display what is the grade of that score. Here is the grade table:

Score: 60 - 69; Grade - D
Score: 70 - 79; Grade - C
Score: 80 - 89; Grade - B
Score: 90 - 100; Grade - A
'''


print "Scores and Grades"
grades = []
for i in range(10):
    answer = input()
    while answer < 60 or answer > 100:
    	print "Please enter number between 60 and 100."
    	answer = input()

    if answer >= 60 and answer < 70:
    	print "Score: " + str(answer) + "; Your grade is D"
    elif answer >= 70 and answer < 80:
    	print "Score: " + str(answer) + "; Your grade is C"
    elif answer >= 80 and answer < 90:
    	print "Score: " + str(answer) + "; Your grade is B"
    else:
    	print "Score: " + str(answer) + "; Your grade is A"    	    	


    grades.append(answer)

print "End of the program. Bye!"
print grades
