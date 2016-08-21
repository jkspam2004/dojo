class Product < ActiveRecord::Base
  # relationships
  belongs_to :category
  has_many :comments, dependent: :destroy

  # validations
  validates :name, :description, :pricing, :category, presence: true
  validates :name, :description, length: { in: 2..20 }
  validates_numericality_of :pricing, greater_than: 0 
end
