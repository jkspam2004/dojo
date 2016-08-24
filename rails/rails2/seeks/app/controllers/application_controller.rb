class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # return the user who is currently logged in
  # available to all controller classes
  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    if current_user
      return true
    else 
      return false
    end
  end

  # redirect to login page if not logged in
  def require_login
    unless logged_in?
      redirect_to "/sessions/new"
    end
  end

  # make sure the user has correct authorization
  def require_correct_user
    user = User.find(params[:id])
    redirect_to "/users/#{current_user.id}" if current_user != user
  end

  helper_method :current_user, :logged_in?, :require_login
end
