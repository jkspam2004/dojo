class TimesController < ApplicationController

  def main
    @time = Time.now
    puts @time
  end
end
