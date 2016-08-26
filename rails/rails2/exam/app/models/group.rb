class Group < ActiveRecord::Base
  # relationships
  belongs_to :user # creator of group
  has_many :members, dependent: :destroy
  has_many :participants, through: :members, source: :user # members

  # validations
  validates :name, presence: true, length: { minimum: 5 }
  validates :description, presence: true, length: { minimum: 10 }
end
