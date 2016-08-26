# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

groups = Group.create([
  { name: 'Web Programmers Guild', description: 'People who are interested in web programming'},
  { name: 'Pitch Perfect Singing Group', description: 'People willing to share their talents and skills in singing'},
  { name: 'Disaster Response Group', description: 'Willing to be deployed to do humanitarian work on disaster response'},
  { name: 'Nerf Gun Enthusiasts', description: 'Finding nerf gun as stress-reliever'},
  
])

groups = User.create([
  { first_name: 'kobe', last_name: 'bryant', email: 'kobe@bryant.com', password: 'password' },
  { first_name: 'james', last_name: 'bond', email: 'james@bond.com', password: 'password' },
])
