# Inheritance

=begin
A class can inherit functionality and variables from a superclass, sometimes referred to as a parent class or base class. Ruby does not support multiple inheritances and so a class in Ruby can have only one superclass. The syntax is as follows:
=end

class ParentClass
  def a_method
    puts 'b'
  end
end
class SomeClass < ParentClass  # < means inherit (or "extends" if you are from Java background)
  def another_method
    puts 'a'
  end
end
instance = SomeClass.new
instance.another_method # => "a"
instance.a_method       # => "b"

# All non-private variables and functions are inherited by the child class from the superclass.

=begin
Example
Let's create a sample of inheritance using the Animal Kingdom. Each mammal should when created say 'I am alive', next each mammal can breathe so let's create another method that states that this mammal is breathing
=end

class Mammal 
  def initialize
    puts 'I am alive!'
  end
  def breathe  
    puts 'Inhale and exhale' 
  end  
end

=begin
Now at this point we can add  another class called Cat. The class Cat will inherit from the Mammal class we previously created. When we create a new Cat, you will notice that the Mammal initialize method runs putting 'I am alive!' on the screen. Next we can now create new methods that the Cat class has.
=end

class Cat < Mammal #inherits from the Mammal class 
  def jerk
    puts 'scratching you...'
  end 
  def speak  
    puts "Meow"  
  end  
end
chloe = Cat.new #creates new class called Cat, 'I am alive!' should print on the screen
chloe.jerk # prints 'scratching you' on the screen
chloe.speak # prints 'Meow'
chloe.breathe # can access the Mammal methods as well, prints 'Inhale and exhale'
