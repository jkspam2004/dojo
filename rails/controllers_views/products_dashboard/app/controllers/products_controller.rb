class ProductsController < ApplicationController
  def index
    @products = Product.all
  end
  
  def show
    @product = Product.find(params[:id])
  end

  def new
    @product = Product.new 
    @categories = Category.all
  end

  def create
    @product = Product.new(product_params)
    flash[:messages] = []

    if @product.save
      flash[:messages].push({ 'status' => 'success', 'text' => "Successful add" }) 
      redirect_to "/products"
    else
      errors = @product.errors.full_messages
      errors.each do |error| 
        flash[:messages].push({ 'status' => 'error', 'text' => error }) 
      end
      redirect_to "/products/new"
    end

  end

  def edit
    @product = Product.find(params[:id])
    @categories = Category.all
  end

  def update
    @product = Product.find(params[:id])
    flash[:messages] = []

    if @product.update(product_params)
      flash[:messages].push({ 'status' => 'success', 'text' => "Successful update" }) 
      redirect_to "/products"
    else
      errors = @product.errors.full_messages
      errors.each do |error| 
        flash[:messages].push({ 'status' => 'error', 'text' => error }) 
      end
      redirect_to "/products/#{@product.id}/edit"
    end

  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    redirect_to "/products"
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :pricing, :category_id)
  end


end
