class WordsController < ApplicationController
  def index
    @word = (0...14).map { (65 + rand(26)).chr }.join

    if not session[:counter]
      session[:counter] = 1
    else
      session[:counter] += 1
    end
 
  end

end
