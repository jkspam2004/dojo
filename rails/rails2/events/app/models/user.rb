class User < ActiveRecord::Base
  # relationships
  belongs_to :state
  has_many :comments, dependent: :destroy
  has_many :events, dependent: :destroy  # user hosting events
  has_many :events_attending, through: :guests, source: :event

  # validations
  has_secure_password
  email_regex = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, :uniqueness => { :case_sensitive => true }, :format => { :with => email_regex } 
  validates :first_name, :last_name, :email, :location, :state, presence: true
  validates :password, length: {minimum: 8}
  validates :password_confirmation, presence: true
end
