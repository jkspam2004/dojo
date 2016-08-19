class NumbersController < ApplicationController
  def index
    if params[:reset]
      session.clear
    end

    if not session[:great_number]
      great_number = rand(1...100) 
      session[:great_number] = great_number
    end  
    print "number is ", session[:great_number].to_s, "\n"

    @guess = 'none'
    if params[:number]
      number = params[:number].to_i 
      if number == -1
        @guess = 'none'
      elsif number < session[:great_number]
        @guess = 'low'
      elsif number > session[:great_number]
        @guess = 'high'
      else
        @guess = 'match'
      end
    end
  end
end
