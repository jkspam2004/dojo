class Member < ActiveRecord::Base
  # relationships
  belongs_to :user
  belongs_to :group


  # ToDo: this should be called Membership

  # validations
end
