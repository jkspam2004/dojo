class UsersController < ApplicationController
  before_action :require_login, except: [:index, :new, :create]
  before_action :set_user, except: [:index, :new, :create]
  before_action :require_correct_user, only: [:show, :edit, :update, :destroy]

  def index
    if current_user
      redirect_to "/users/#{current_user.id}"
    else
      redirect_to "/sessions/new"
    end
  end

  def new
    if current_user
      redirect_to "/users/#{current_user.id}"
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
    #@user = User.find(params[:id])
    #puts "user: ", @user.inspect
  end

  def edit
    # redirect to show page of the user you are viewing that is not yourself
    if current_user.id != @user.id
      redirect_to "/users/#{@user.id}" 
    end
  end

  def update
    flash[:messages] = []

    if @user.update(user_params)
      flash[:messages].push({ 'status' => 'success', 'text' => "Successfully updated"  })
      redirect_to "/users/#{@user.id}"
    else
      errors = @user.errors.full_messages
      errors.each do |error|
        flash[:messages].push({ 'status' => 'error', 'text' => error })
      end
      redirect_to "/users/#{@user.id}/edit"
    end
  end

  def destroy
    flash[:messages] = []

    @user.destroy
    session.clear()
    flash[:messages].push({ 'status' => 'success', 'text' => "Account deleted" })
    redirect_to "/sessions/new"
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end

  # set the user from session
  def set_user
    @user = User.find(params[:id])
  end
end
