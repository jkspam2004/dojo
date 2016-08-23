class UsersController < ApplicationController
  def new
    puts "index page"
    @user = User.new()
  end

  def create
    @user = User.new(user_params)
    puts "user: ", @user.inspect
    #fail
    flash[:messages] = []

    if @user.save
      flash[:messages].push({ 'status' => 'success', 'text' => 'User successfully registered' })
      redirect_to action: 'index'
    else
      redirect_to action: 'index'
      errors = @user.errors.full_messages
      errors.each do |error|
        flash[:messages].push({ 'status' => 'error', 'text' => error })
      end
    end
  end


  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
