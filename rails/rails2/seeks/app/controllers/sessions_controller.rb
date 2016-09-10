class SessionsController < ApplicationController
  def new
    # if logged in (if current_user), set user to current_user
    # then redirect to profile page
    # otherwise, render login page
    if user = current_user 
      puts "here?"
      redirect_to "/users/#{user.id}"
    end
  end

  # create session: check login credentials and create the session
  # if password does not match, redirect back to login form
  # if good credentials, save user id in session and redirect to profile page
  def create
    # find the first user matching the email
    user = User.find_by(email: params[:user][:email])
    #print "authenticate user:", user.inspect, "\n"

    flash[:messages] = []
    # match the entered password with the password of user in the db
    if user && user.authenticate(params[:user][:password])
      flash[:messages].push({ 'status' => 'success', 'text' => "Welcome #{user.name}" }) 
      session[:user_id] = user.id

      redirect_to "/users/#{user.id}"
    else
      flash[:messages].push({ 'status' => 'error', 'text' => "Invalid login" }) 

      redirect_to '/sessions/new'
    end
  end

  # logout the user and destroy the session
  def destroy
    # delete session for user_id key
    #session[:user_id] = nil
    session.delete(:user_id)

    flash[:messages] = []
    flash[:messages].push({ 'status' => 'success', 'text' => "You have successfully logged out." }) 
    redirect_to '/sessions/new'
  end

end
