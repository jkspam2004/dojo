class SessionsController < ApplicationController
  # if logged in (if current_user), set user to current_user. then redirect to groups page
  # otherwise, if not logged in, render login page
  def new
    if user = current_user
      redirect_to "/groups"
    end
  end

  # create session: check login credentials and create the session
  # if password does not match, redirect back to login form
  # if good credentials, save user id in session and redirect to profile page
  def create
    # find the first user matching the email
    user = User.find_by(email: params[:user][:email])

    flash[:messages] = []
    # match the entered password with the password of user in the db
    if user && user.authenticate(params[:user][:password])
      flash[:messages].push({ 'status' => 'success', 'text' => "Welcome #{user.first_name}" }) 
      session[:user_id] = user.id

      redirect_to "/groups"
    else
      flash[:messages].push({ 'status' => 'error', 'text' => "Invalid login" }) 

      redirect_to '/sessions/new'
    end
  end

  # logout the user and destroy the session
  def destroy
    session.clear()

    flash[:messages] = []
    flash[:messages].push({ 'status' => 'success', 'text' => "You have successfully logged out." }) 
    redirect_to '/sessions/new'
  end

end
