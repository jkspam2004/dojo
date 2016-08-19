class Message < ActiveRecord::Base
  # relationships
  belongs_to :post
  belongs_to :user
  has_many :comments, as: :commentable, dependent: :destroy

  # validations
  validates :author, :message, presence: true
  validates :message, length: { minimum: 15 }
end
