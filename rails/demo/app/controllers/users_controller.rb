class UsersController < ApplicationController
  def index
    # renders the index.html.erb view in the views/users folder
    render "index"
  end

  def main
    if signed_in?
      redirect_to "/users/show" # we can route with /controller/method, but bad practice
    else
      redirect_to_new_users_path # this is the proper way to route in Rails
    end
  end
  def list
    render "products/all" # renders the all.html.erb view in the views/products folder
  end

  def new
  end

end
