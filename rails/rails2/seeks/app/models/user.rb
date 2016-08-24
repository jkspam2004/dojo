class User < ActiveRecord::Base
  # relationships
  has_many :secrets # direct relationship
  has_many :likes, dependent: :destroy
  has_many :secrets_liked, through: :likes, source: :secret # indirect relationship

  # validations
  has_secure_password
  email_regex = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :name, :email, presence: true
  validates :email, :uniqueness => { :case_sensitive => false }, :format => { :with => email_regex } 
  validates :password, :presence => true
  validates :password_confirmation, :presence => true
end
