class SaysController < ApplicationController
  def index
    render text: "What do you want me to say???"
  end

  def say_my_name
    if params[:name]
      if params[:name] == "michael"
        redirect_to "/say/hello/joe" 
      else
        render text: "Saying Hello " + params[:name].capitalize + "!"
      end
    else
      render text: "Saying Hello"
    end
  end

  def times
    if not session[:count]
      session[:count] = 1
    else
      session[:count] +=1
    end

    render text: "number of times visited page: " + session[:count].to_s
  end

  def restart
    session.clear
    render text: "Destroyed the session!"
  end
end


# rails g controller Says
