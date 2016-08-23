require 'rails_helper'

RSpec.describe UsersController, type: :controller do
end

feature "guest user registers for an account" do
  scenario "successfully creates a new user account" do
    visit "users#new"
    #puts "page body", page.html
    fill_in "user[first_name]", with: "Mickey"
    fill_in "user[last_name]", with: "Mouse"
    fill_in "user[email]", with: "mickey@mouse.com"
    fill_in "user[password]", with: "password"
    fill_in "user[password_confirmation]", with: "password"
    click_button "Register"
    expect(page).to have_content "User successfully registered"
  end
end

