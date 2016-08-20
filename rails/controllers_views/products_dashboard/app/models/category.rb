class Category < ActiveRecord::Base
  # relationships
  has_many :products

  # validations
  validates :name, presence: true, length: { minimum: 2 }
end
