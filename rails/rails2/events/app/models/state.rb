class State < ActiveRecord::Base
  has_many :events, dependent: :destroy
  has_many :users, dependent: :destroy

  validates :state, presence: true, length: { is: 2 }
end
