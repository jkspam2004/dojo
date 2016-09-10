class User < ActiveRecord::Base
  # relationships
  has_many :groups, dependent: :destroy # as the creator
  has_many :members, dependent: :destroy # as the creator
  has_many :groups_member_of, through: :members, source: :group # as a member of 

  # ToDo: change members to memberships. reads better
  #has_many :memberships, dependent: :destroy # as the creator
  #has_many :groups_member_of, through: :memberships, source: :group # as a member of 


  # validations
  has_secure_password
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, presence: true, length: { minimum: 2 }
  validates :password, length: { minimum: 8 }
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
end
