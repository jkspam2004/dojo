#!/usr/bin/ruby

=begin
`self` refers to the instance of the class you are writing (because in Ruby, class definitions are also object instances)

When using `class << self` inside a class definition, `self` refers to the object instance of the class; any methods defined in the definition block become methods on the class object (and thus become class methods):
=end

# http://ruby-doc.org/docs/keywords/1.9/

class Person
  class << self
    def species
      "Homo sapiens"
    end
  end
end


=begin
class << self opens up self's singleton class, so that methods can be redefined for the current self object (which inside a class or module body is the class or module itself). Usually, this is used to define class/module ("static") methods:
=end

class String
  class << self
    def value_of obj
      obj.to_s
    end
  end
end

# String.value_of 42   # => "42"
# This can also be written as a shorthand:

class String
  def self.value_of obj
    obj.to_s
  end
end
Or even shorter:

def String.value_of obj
  obj.to_s
end

=begin
When inside a function definition, self refers to the object the function is being called with. In this case, class << self opens the singleton class for that object; one use of that is to implement a poor man's state machine:
=end

class StateMachineExample
  def process obj
    process_hook obj
  end

private
  def process_state_1 obj
    # ...
    class << self
      alias process_hook process_state_2
    end
  end

  def process_state_2 obj
    # ...
    class << self
      alias process_hook process_state_1
    end
  end

  # Set up initial state
  alias process_hook process_state_1
end

=begin
So, in the example above, each instance of StateMachineExample has process_hook aliased to process_state_1, but note how in the latter, it can redefine process_hook (for self only, not affecting other StateMachineExample instances) to process_state_2. So, each time a caller calls the process method (which calls the redefinable process_hook), the behaviour changes depending on what state it's in.

=end

=begin
This is called Metaprogramming in Ruby and it is the Ruby way of creating statics methods, functions and so on putting in a simple way.

Here you could find a more detailed explanation about the "Self". 

Metaprogramming in Ruby: It's All About the Self
http://yehudakatz.com/2009/11/15/metaprogramming-in-ruby-its-all-about-the-self/
end

