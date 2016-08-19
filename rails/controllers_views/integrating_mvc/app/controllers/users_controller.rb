class UsersController < ApplicationController
  def index
    #@users = User.all
    render json: User.all
  end

  def new
  end

  def create
    rand_name = (0...8).map { (65 + rand(26)).chr }.join
    redirect_to users_path
 
    #@user = User.create(name: params[:name])
    #puts "\n\n", @user.to_yaml, "\n\n" # prints in the rails server terminal as a block
    #puts "\n\n", @user.inspect, "\n\n" # prints as a string
    #redirect_to '/'
    #render :text => @product.inspect # generates data in the html source
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def edit
    @user = User.find(params[:id])
  end

  def total
    @count = User.count # queries the db, class attr
 
    @user = User.all # load all entries from db 
    @size= @user.size # instance attr
    @length= @user.length # instance attr


    render json: "count: " + @count.to_s + ", size: " + @size.to_s + ", length: " + @length.to_s
  end
end
