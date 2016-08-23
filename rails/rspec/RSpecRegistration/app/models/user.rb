class User < ActiveRecord::Base
  #has_secure_password
  #validates_length_of :password, :mininum => 6
  puts "User model"
  # validations
  email_regex = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, :email, :password, presence: true
  validates :email, :uniqueness => { :case_sensitive => true }, :format => { :with => email_regex } 
  validates :password, confirmation: true
  validates :password_confirmation, presence: true
end
