class Blog < ActiveRecord::Base
  # relationships
  has_many :posts, dependent: :destroy
  has_many :owners, dependent: :destroy
  has_many :users, through: :owners, dependent: :destroy
  has_many :messages, through: :posts, dependent: :destroy
  has_many :comments, as: :commentable, dependent: :destroy

  # validations
  validates :name, :description, presence: true
end
