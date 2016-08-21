class Category < ActiveRecord::Base
  # relationships
  has_many :products, dependent: :destroy

  # validations
  validates :name, presence: true, length: { minimum: 2 }
end
