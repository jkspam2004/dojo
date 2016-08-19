class Post < ActiveRecord::Base
  # relationships
  belongs_to :blog
  belongs_to :user
  has_many :messages, dependent: :destroy
  has_many :comments, as: :commentable, dependent: :destroy

  # validations
  validates :title, :content, presence: true
  validates :title, length: { minimum: 7 }
end
