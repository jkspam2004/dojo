# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.create([
  { name: 'Electronics' },
  { name: 'Household' },
  { name: 'Gardening' },
  { name: 'Automotive' },
  { name: 'Ninjas' }
])

#Product.create([
#  { name: 'hose', description: 'for watering things', pricing: 28.99 },  
#  { name: 'lights', description: 'pathway solar lights', pricing: 38.98 },  
#  { name: 'rocks', description: 'landscape', pricing: 15.99 },  
#
#  { name: 'monitor', description: '27 inch', pricing: 299.99 },  
#  { name: 'power strip', description: '5 sockets', pricing: 12 },  
#  { name: 'mac air', description: 'apple computer', pricing: 1999.99 },  
#
#  { name: 'dawn', description: 'dishwashing detergent', pricing: 7.99 },  
#  { name: 'toyota', description: 'year 2000 model avalon', pricing: 2888.99 },  
#  { name: 'leonardo', description: 'plush ninja turtle', pricing: 13.84 },  
#])
