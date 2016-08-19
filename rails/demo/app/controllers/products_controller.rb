class ProductsController < ApplicationController
  def index
    @products = Product.all
    #render json: @products
    render "index"
  end

  def create
    #render :text => "Came to Create method"
    @product = Product.create( name: params[:name], description: params[:description])

    puts "\n\n", @product.to_yaml, "\n\n" # prints in the rails server terminal as a block
    puts "\n\n", @product.inspect, "\n\n" # prints as a string
    redirect_to '/'
    #render :text => @product.inspect # generates data in the html source
  end

  def show
  end

  def edit
  end
end
