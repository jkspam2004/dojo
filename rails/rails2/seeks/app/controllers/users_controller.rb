class UsersController < ApplicationController
  before_action :require_login, only: [:show]
  before_action :set_user, only: [:show, :new, :index, :edit]

  def index
    if @user
      redirect_to "/users/#{@user.id}"
    else
      redirect_to "/sessions/new"
    end
  end

  def new
    if @user
      redirect_to "/users/#{@user.id}"
    end
  end

  # create the user and set the session 
  # if errors, redirect back to the form
  def create
    flash[:messages] =[]
    user = User.new(user_params)

    if user.save
      flash[:messages].push({ 'status' => 'success', 'text' => "Successfully added"  })
      session[:user_id] = user.id
      redirect_to "/users/#{user.id}"
    else
      errors = user.errors.full_messages
      errors.each do |error|
        flash[:messages].push({ 'status' => 'error', 'text' => error })
      end
      redirect_to "/users/new"
    end
  end

  def show
    puts "user: ", @user.inspect
  end

  def edit
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end

  # set the user from session
  def set_user
    @user = current_user
  end
end
