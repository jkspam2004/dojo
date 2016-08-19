class Owner < ActiveRecord::Base
  # relationships
  belongs_to :user
  belongs_to :blog

end
