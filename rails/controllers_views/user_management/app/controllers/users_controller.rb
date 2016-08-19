class UsersController < ApplicationController
  def index
    #session.clear
    @users = User.all
  end

  def new
    # by default, will render "new.html"
  end

  def create
    puts params
    flash[:messages] = []
    user = User.new(first_name: params[:first_name], last_name: params[:last_name], email_address: params[:email_address], password: params[:password])

    print "valid? ",  user.valid?, "\n"
    if user.valid?
      user.save
      flash[:messages].push({ 'status' => "success", 'text' => "Successfully added"}) 
      redirect_to action: 'index' 
    else
      errors = user.errors.full_messages
      print "errors ", errors, "\n"
      errors.each do |error|
        flash[:messages].push({ 'status' => "error", 'text' => error }) 
      end
      redirect_to action: 'new' 
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    flash[:messages] = []

    user = User.find(params[:id])

    #if @user.update(first_name: params[:first_name], last_name: params[:last_name], email_address: params[:email_address], password: params[:password])
    if user.update(user_params) # calls user_params to make sure we are passing in the fields that we want

      flash[:messages].push({ 'status' => "success", 'text' => "Successful update"}) 
      redirect_to action: 'index' 
    else
      errors = user.errors.full_messages
      print "errors ", errors, "\n"
      errors.each do |error|
        flash[:messages].push({ 'status' => "error", 'text' => error }) 
      end
        # redirect to edit page so user can fix errors in the update
        redirect_to "/users/#{user.id}/edit"
    end
  end

  def delete
    user = User.find(params[:id])
    user.destroy
    redirect_to action: 'index' 
  end

  private # private functions below

  # only following params allowed to be inputted as a security measure
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
  
end
