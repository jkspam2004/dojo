class Member < ActiveRecord::Base
  # relationships
  belongs_to :user
  belongs_to :group

  # validations
end
