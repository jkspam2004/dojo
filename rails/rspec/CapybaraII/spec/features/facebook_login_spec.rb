require 'spec_helper'
Capybara.javascript_driver = :selenium_chrome
feature "Facebook" do
  scenario "lets user to login", :js => true do       
    visit 'http://facebook.com'
    fill_in('email', :with => 'userdemo734@yahoo.com.ph')      
    fill_in('pass', :with => 'qwerty12345')      
    click_button('Log In')    
  end
end
