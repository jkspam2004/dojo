class RpgController < ApplicationController
  def index
    if !session[:gold].present?
      session[:gold] = 0
    end
    if !session[:activities].present?
      puts "activity not present"
      session[:activities] = [] 
    end
  end

  def reset
    session.clear
    redirect_to root_path
  end

  def farm
    earned = rand(10...20)
    time = Time.now
    activity = "Earned " + earned.to_s + " golds from the farm! (" + time.to_s + ")"
    session[:activities].push({ 'status'=> 'gain', 'activity' => activity })
    redirect_to root_path
  end

  def cave
    earned = rand(5...10)
    time = Time.now
    activity = "Earned " + earned.to_s + " golds from the cave! (" + time.to_s + ")"
    session[:activities].push({ 'status' => 'gain', 'activity' => activity })
    redirect_to root_path
  end

  def house
    earned = rand(2...5)
    time = Time.now
    activity = "Earned " + earned.to_s + " golds from the house! (" + time.to_s + ")"
    session[:activities].push({ 'status' => 'gain', 'activity' => activity })
    redirect_to root_path
  end

  def casino
    earned = rand(-50...50)
    time = Time.now
    if earned < 0
      earned = earned.abs
      activity = "Entered a casino and lost " + earned.to_s + "... Ouch ..(" + time.to_s + ")"
      session[:activities].push({ 'status' => 'loss', 'activity' => activity })
    else
      activity = "Earned " + earned.to_s + " golds from the casino! (" + time.to_s + ")"
      session[:activities].push({ 'status' => 'gain', 'activity' => activity })
    end
    redirect_to root_path
  end

end
