class SurveysController < ApplicationController
  def index
  end

  def create
    if not session[:counter]
      session[:counter] = 1
    else
      session[:counter] += 1
    end

    flash[:message] = "Thanks for submitting this form! You have submitted this form " + session[:counter].to_s + " times now"

    @dojo = params
    puts @dojo.to_s
    #fail 

    render "result"
  end

end
