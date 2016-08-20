class Product < ActiveRecord::Base
  # relationships
  belongs_to :category

  # validations
  validates :name, :description, :category, :pricing, presence: true
  validates :name, :description, length: { in: 2..20 }
  validates_numericality_of :pricing, greater_than: 0 
end
