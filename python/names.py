'''
Part 1:
Given the following list:

students = [ 
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
Create a program that outputs:

Michael Jordan
John Rosales
Mark Guillen
KB Tonel

Part 2:
Now, given the following dictionary:

users = {
 'Students': [ 
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
Create a program that prints  the following format (including number of characters in each combined name):

Students
1 - MICHAEL JORDAN - 13
2 - JOHN ROSALES - 11
3 - MARK GUILLEN - 11
4 - KB TONEL - 7
Instructors
1 - MICHAEL CHOI - 11
2 - MARTIN PURYEAR - 13
'''

# Part 1
print "\nPart 1:\n"
students = [ 
	{'first_name':  'Michael', 'last_name' : 'Jordan'},
	{'first_name' : 'John', 'last_name' : 'Rosales'},
	{'first_name' : 'Mark', 'last_name' : 'Guillen'},
	{'first_name' : 'KB', 'last_name' : 'Tonel'}
]

for student in students:
	print student['first_name'], student['last_name']

# Part 2
print "\nPart 2:\n"
users = {
	'Students': [ 
	 {'first_name':  'Michael', 'last_name' : 'Jordan'},
	 {'first_name' : 'John', 'last_name' : 'Rosales'},
	 {'first_name' : 'Mark', 'last_name' : 'Guillen'},
	 {'first_name' : 'KB', 'last_name' : 'Tonel'}
	],
	'Instructors': [
	 {'first_name' : 'Michael', 'last_name' : 'Choi'},
	 {'first_name' : 'Martin', 'last_name' : 'Puryear'}
	]
 }

for title, data in users.items():
	print title
	for i in range(1,len(data)+1):
		first_name = data[i-1]['first_name'].upper()
		last_name = data[i-1]['last_name'].upper()
		char_cnt = len(first_name) + len(last_name)
		print i, '-', first_name, last_name, '-', char_cnt


