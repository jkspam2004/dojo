class Event < ActiveRecord::Base
  # relationships
  belongs_to :user
  belongs_to :state
  has_many :attendees, through: :guests, source: :user
  has_many :comments, dependent: :destroy

  # validations
  validates :name, :location, :event_date, presence: true
  validates_date :event_date, after: lambda { Date.current }
end
