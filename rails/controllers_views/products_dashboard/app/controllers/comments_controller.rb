class CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def create
    comment = Comment.new(comment_params)
    flash[:messages] = []
    puts "params"
    puts comment_params[:product_id]

    if comment.save
      flash[:messages].push({ 'status' => "success", 'text' => "Successful add" }) 
    else
      errors = comment.errors.full_messages
      errors.each do |error|
        flash[:messages].push({ 'status' => "error", 'text' => error }) 
      end
    end  

    redirect_to "/products/#{comment_params[:product_id]}"
  end

  def comment_params
    params.require(:comment).permit(:comment, :product_id)
  end
end
