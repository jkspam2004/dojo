class Number < ActiveRecord::Base
  attr_accessor :value
  def initialize
    @value = 1
  end
end
