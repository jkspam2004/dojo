class User < ActiveRecord::Base
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, :email_address, :age, presence: true
  validates :age, numericality: true
  validates :first_name, :last_name, length: {minimum: 2}
  validates :email_address, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates_numericality_of :age, greater_than_or_equal_to: 10, less_than: 150
end
