class User < ActiveRecord::Base
  # relationships
  has_many :messages, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :owners, dependent: :destroy
  has_many :blogs, through: :owners
  has_many :comments, as: :commentable, dependent: :destroy
  has_many :friendships, :foreign_key => "user_id", :class_name => "Friendship"
  has_many :friends, through: :friendships

  # validations
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, :email_address, presence: true
  validates :first_name, :last_name, length: {minimum: 2}
  validates :email_address, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }

  def self.not_friends(user)
    find_by_sql("select * from users where users.id not in (select friendships.user_id from friendships where friendships.user_id = #{user.id}) ")
  end
  
end
