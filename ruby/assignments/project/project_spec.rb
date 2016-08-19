# we are going to have to include our Project class in our spec file
require_relative 'project'

# now we can start Rspec
# this line enacts the Rspec library and calls the describe method that takes in the class Project, when doing so it expects to do something
RSpec.describe Project do
  # now we can have Rspec test our Project class
  it 'has a getter and setter for name attribute' do

    # now we can test our Project class
    # lets create a new project and make sure we can set the name attribute
    project = Project.new("Project Name", "I am a project")
    project.name = "Changed Name"
    # we should be able to run that code, now lets make sure its changed.
    # we run the expect method on our projects name and expect our project name to now equal the value of Changed Name, this returns true or false
    expect(project.name).to eq("Changed Name")
  end 

  # building off our previous example lets add a test to make sure our method returns the correct value
  it 'has a method elevator_pitch to explain name and description' do
    #lets create two new projects
    project1 = Project.new('Project 1', 'description 1')
    project2 = Project.new('Project 2', 'description 2')
    #if we call elevator_pitch method we should expect to get that project name and description back
    expect(project1.elevator_pitch).to eq("Project 1, description 1")
    expect(project2.elevator_pitch).to eq("Project 2, description 2")
  end

  it "" do
    project3 = Project.new("Project 3", "description 3")
    expect(project3.add_to_team("jill")).to eq("jill")
  end
end


=begin
That's our first Rspec test ever! Let's run it and make sure it works. In your terminal, let's navigate to that folder and run:

rspec project_spec.rb
Later on, we will have multiple test files in our directory. To run them all at once, we can do the following command:

rspec .
We should see 0 failures! When we call "rspec .", we run all of that previous Rspec code that we wrote. In the end, it is just Ruby being interpreted and not some unusual foreign language. Similar to how we would write ruby code in our .rb file or terminal to check if our implementation is functioning correctly, we are just enacting a testing Library to do it for us instead. It allows our code to reach a new level of trust, especially with the more testing we do.

In the next 3 tabs, we are going to be writing tests for assignments that we have already completed. This is designed for you to master the rspec syntax, rather than practice TDD. Remember, in TDD, we first write a failing test, then produce the minimal code to pass that test, and finally refactor the code that we just wrote.
=end


=begin
test results:

pass:
[eto ~/Git/dojo/ruby/assignments master 15:17:34]$ rspec project_spec.rb
.

Finished in 0.00104 seconds (files took 0.10668 seconds to load)
1 example, 0 failures


fail:
[eto ~/Git/dojo/ruby/assignments master 15:15:10]$ rspec project_spec.rb
F

Failures:

  1) Project has a getter and setter for name attribute
     Failure/Error: project.name = "Changed Name"

     NoMethodError:
       undefined method `name=' for #<Project:0x007f9a2caf2508>
       Did you mean?  named=
                      named
     # ./project_spec.rb:13:in `block (2 levels) in <top (required)>'

Finished in 0.00077 seconds (files took 0.11787 seconds to load)
1 example, 1 failure

Failed examples:

rspec ./project_spec.rb:8 # Project has a getter and setter for name attribute


=end
