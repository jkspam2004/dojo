class Comment < ActiveRecord::Base
  # relationships
  belongs_to :product

  # validations
  validates :comment, presence: true, length: { minimum: 2 }
end
