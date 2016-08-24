class Secret < ActiveRecord::Base
  # relationships
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :users_liked, through: :likes, source: :user

  # validations
  validates :content, presence: true 
end
