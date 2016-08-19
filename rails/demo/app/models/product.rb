class Product < ActiveRecord::Base
  belongs_to :user # foreign key
end
